import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
import userRouter from "./lib/controllers/users/controller";
import auth from "./middleware/auth";
const app = express();
import bodyParser from "body-parser";

app.use(
  cors({
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  console.log("req.headers: ", req.headers);

  console.log("req.headers.authorization: ", req.headers.authorization);
  const token = req.headers.authorization?.split(" ")[1];
  console.log("token is here:", token);
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  const details = await auth.verifyIdToken(token);

  req["user"] = details;
  next();
};

// app.use(requireAuth);

app.use("/api", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/test", requireAuth, (req, res) => {
  res.send("Hello World test");
});

app.post("/test", requireAuth, (req, res) => {
  res.send("Hello World test");
});

export default app;
