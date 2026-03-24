import express from "express";
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";
import cors from "cors";
import router from "./routes/User.routes.js";
configDotenv();
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("Welcome to backend");
});
app.listen(port, () => {
  console.log("Server is listening on Port:", port);
});
