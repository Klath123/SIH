import { ethers } from "ethers";

const abi = [
  "function mintPassport(address to, string tokenURI) external returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event VisitRecorded(uint256 indexed tokenId, string place, uint256 timestamp)"
];

export const getNFTContract = () => {
  // Use ethers.JsonRpcProvider instead of ethers.providers.JsonRpcProvider
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  return new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);
};

export const mintPassportOnChain = async (userWallet, tokenURI) => {
  const contract = getNFTContract();
  const tx = await contract.mintPassport(userWallet, tokenURI);
  const receipt = await tx.wait();

  let tokenId = null;
  for (const log of receipt.logs) {
    try {
      const parsed = contract.interface.parseLog(log);
      if (parsed && parsed.name === "Transfer") {
        const from = parsed.args[0];
        const tid = parsed.args[2];
        if (String(from).toLowerCase() === "0x0000000000000000000000000000000000000000") {
          tokenId = tid.toString();
          break;
        }
      }
    } catch (err) {
      console.error("Error parsing log:", err);
    }
  }

  if (!tokenId) {
    throw new Error("Token ID not found in transaction logs");
  }

  return {
    success: true,
    txHash: receipt.hash, // Changed from receipt.transactionHash to receipt.hash
    tokenId,
    rawReceipt: {
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed?.toString?.() || receipt.gasUsed,
    },
  };
};