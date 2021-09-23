import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import config from "./config";

// server config
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
});
