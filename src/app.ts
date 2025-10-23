const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get(
  "/health",
  (req: any, res: { json: (arg0: { status: string }) => any }) =>
    res.json({ status: "ok" })
);

module.exports = { app };
