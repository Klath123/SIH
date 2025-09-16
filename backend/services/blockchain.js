// backend/services/blockchain.js
require("dotenv").config();
const { ethers } = require("ethers");

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const abi = [
  "function mintPassport(address to, string tokenURI) external returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
];

const provider = new ethers.JsonRpcProvider(RPC_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

async function mintPassport(to, tokenURI) {
  const tx = await contract.mintPassport(to, tokenURI);
  const receipt = await tx.wait();
  return receipt;
}

module.exports = { contract, mintPassport };
