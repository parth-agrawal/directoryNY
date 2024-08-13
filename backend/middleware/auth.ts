import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : {};

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey as admin.ServiceAccount),
});

// add middleware that if the user doesn't exist, 
// create them, and pass the user id into req.user

// if they do exist, pass the user id from our database into req.user 




const auth = getAuth(app);

export default auth;
