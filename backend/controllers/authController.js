import { createNewWallet } from "../services/walletService.js";
import { encrypt } from "../services/cryptoService.js";
import { createUser, findUserById } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    // check if already exists
    const existing = await findUserById(userId);
    if (existing) {
      return res.status(400).json({ error: "User already registered" });
    }

    // create wallet
    const { address, privateKey } = createNewWallet();
    const encryptedKey = encrypt(privateKey);

    await createUser(userId, address, encryptedKey);

    return res.json({
      success: true,
      userId,
      walletAddress: address,
      isValidated: true
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const user = await findUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json({
      success: true,
      userId: user.userId,
      walletAddress: user.walletAddress,
      isValidated: user.isValidated
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};
