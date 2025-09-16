// backend/models/user.js
const { db } = require("../services/firebase");

const getUser = async (userId) => {
  const doc = await db.collection("users").doc(userId).get();
  return doc.exists ? doc.data() : null;
};

const createUser = async (userId, data) => {
  await db.collection("users").doc(userId).set(data);
  return getUser(userId);
};

const updateUser = async (userId, data) => {
  await db.collection("users").doc(userId).update(data);
  return getUser(userId);
};

module.exports = { getUser, createUser, updateUser };
