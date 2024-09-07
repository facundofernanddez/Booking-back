import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect";

dotenv.config();

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
