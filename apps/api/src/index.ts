import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ status: "API running" });
});

app.listen(4000, () => {
  console.log("API listening on port 4000");
});
