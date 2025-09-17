import admin from "firebase-admin";
import dotenv from "dotenv";
import serviceAccount from "../serviceAccountKey.json" assert { type: "json" };

dotenv.config();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  });
}

const db = admin.firestore();
const bucket = admin.storage().bucket();

export { db, bucket };
