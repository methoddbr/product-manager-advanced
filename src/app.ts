const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const ProductController = require("./controllers/product.comtroller");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get(
  "/health",
  (req: any, res: { json: (arg0: { status: string }) => any }) =>
    res.json({ status: "ok" })
);

app.get("/products", ProductController.list);
app.get("/products/:id", ProductController.get);
app.post("/products", ProductController.create);
app.put("/products/:id", ProductController.update);
app.delete("/products/:id", ProductController.remove);

module.exports = { app };
