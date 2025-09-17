import { db } from "../services/firebase.js";

const usersRef = db.collection("users");

export const createUser = async (userId, walletAddress, encryptedKey) => {
  await usersRef.doc(userId).set({
    userId,
    walletAddress,
    privateKey: encryptedKey,
    isValidated: true,
    createdAt: new Date()
  });
};

export const findUserById = async (userId) => {
  const doc = await usersRef.doc(userId).get();
  return doc.exists ? doc.data() : null;
};
