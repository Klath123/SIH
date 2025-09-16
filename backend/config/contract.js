import dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

if (!RPC_URL || !PRIVATE_KEY || !CONTRACT_ADDRESS) {
  console.warn("⚠️ Missing env vars. Check .env for RPC_URL, PRIVATE_KEY, CONTRACT_ADDRESS");
}

const abi = [
  "function mintPassport(address to, string tokenURI) external returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event VisitRecorded(uint256 indexed tokenId, string place, uint256 timestamp)"
];

let contract;

try {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);
} catch (err) {
  console.error("Error creating contract instance:", err.message || err);
}

export default contract;
