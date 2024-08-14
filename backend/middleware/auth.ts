import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import prisma from "../prisma/client"
import { Request, Response, NextFunction } from "express";
import { UserService } from "../lib/services/User/service";
import { User } from "@prisma/client";

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : {};

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey as admin.ServiceAccount),
});

interface RequestWithDetails extends Request {
  userFirebaseId: string;
  userTwitterDetails: {
    displayName: string;
    profilePicture: string;
  };
}


export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  const details = await auth.verifyIdToken(token);
  console.log('banana details', details)
  const userdetails = await auth.getUser(details.uid);
  //   todo: add userdetails to req
  console.log("userdetails: ", userdetails);

  req["userFirebaseId"] = details.uid;
  req["userTwitterDetails"] = { "displayName": userdetails.displayName, "profilePicture": userdetails.photoURL }
  next();
};



// add middleware that if the user doesn't exist, 
// create them, and pass the user id into req.user

// if they do exist, pass the user id from our database into req.user 

export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const firebaseId = req.userFirebaseId
  if (!firebaseId) return res.status(401).json({ message: "Unauthorized" })


  try {
    const user = await UserService().getUserByFirebaseId({ firebaseId })
    if (user) {
      req["userId"] = user.id;
      next();
    } else {
      // User doesn't exist, create a new user
      const newUser: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
        displayName: req.userTwitterDetails.displayName,
        profilePicture: req.userTwitterDetails.profilePicture,
        twitterHandle: "@fractaltechnyc",
        referredId: null,
        firebaseId: firebaseId
      }
      const createdUser = await UserService().createUser({ newUser })
      req["userId"] = createdUser.id;
      next();

    }
  }
  catch (error) {
    console.log('error', error)
  }
}


const auth = getAuth(app);

export default auth;
