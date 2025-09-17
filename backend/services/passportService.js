// import contract from "../config/contract.js";

// export async function mintPassport(userWallet, tokenURI = "") {
//   if (!contract) throw new Error("Contract not initialized on server");

//   const tx = await contract.mintPassport(userWallet, tokenURI);
//   const receipt = await tx.wait();

//   let tokenId = null;
//   for (const log of receipt.logs) {
//     try {
//       const parsed = contract.interface.parseLog(log);
//       if (parsed && parsed.name === "Transfer") {
//         const from = parsed.args[0];
//         const tid = parsed.args[2];
//         if (String(from).toLowerCase() === "0x0000000000000000000000000000000000000000") {
//           tokenId = tid.toString();
//           break;
//         }
//       }
//     } catch {}
//   }

//   return {
//     success: true,
//     txHash: receipt.transactionHash || tx.hash,
//     tokenId,
//     rawReceipt: {
//       blockNumber: receipt.blockNumber,
//       gasUsed: receipt.gasUsed?.toString?.() || receipt.gasUsed,
//     },
//   };
// }
