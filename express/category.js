const express = require("express");
const cors = require("cors");
const json = require("body-parser");
const e = require("express");

const app = express();
app.use(cors());
app.use(json());

const port = 8080;

let productList = [
  {
    id: 1,
    category: "Vegetables",
    product: "Lettuce",
    inStock: "yes",
    price: "$2.99",
  },
  {
    id: 2,
    category: "Vegetables",
    product: "Carrots",
    inStock: "yes",
    price: "$1.99",
  },
];

app.get("/productList", (req, res) => {
  res.json({
    status: true,
    result: productList,
  });
});
app.get("/productInfo?id=id", (req, res) => {
  const { id } = req.query;
  console.log(id);
  const newArr = productList.filter((e) => e.id == id);
  res.json({
    status: true,
    result: newArr[0],
  });
  console.log(newArr[0]);
});
app.post("/productInfo", (req, res) => {
  const { category, product, inStock, price } = req.body;
  let id = productList.length + 1;
  productList.push({ id, category, product, inStock, price });
  res.json({
    status: true,
    result: productList,
  });
});
app.listen(port, () => {
  console.log({ port });
});
