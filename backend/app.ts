import express from "express";
import cors from "cors";
import userRouter from "./lib/controllers/users/controller";
import spaceListingsRouter from "./lib/controllers/space-listings/controller";
import userListingsRouter from "./lib/controllers/user-listings/controller";

const app = express();

app.use(
	cors({
		origin: ['origin(s)'],
		allowedHeaders: ['Authorization', 'Content-Type'],
	})
);

app.use(express.json());

app.use("/api", userRouter);
app.use('/api/space-listings', spaceListingsRouter);
app.use('/api/user-listings', userListingsRouter);


app.get("/", (req, res) => {
	res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
