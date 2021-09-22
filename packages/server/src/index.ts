import express, { Request, Response } from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO WORLD");
});

app.listen(port, () => {
  console.log(`The server running on port ${port}`);
});
