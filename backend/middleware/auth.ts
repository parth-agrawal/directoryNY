import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";

import serviceAccountKey from "./serviceAccountKey.json";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey as admin.ServiceAccount),
});

const auth = getAuth(app);

export default auth;
