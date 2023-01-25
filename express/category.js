const express = require("express");
const cors = require("cors");
const json = require("body-parser");
const e = require("express");

const app = express();
app.use(cors());
app.use(json());

const port = 9999;

let category = [
  {
    id: 1,
    category: "world",
  },
  {
    id: 2,
    category: "economy",
  },
  {
    id: 3,
    category: "health",
  },
];

app.get("/categories", (req, res) => {
  res.json({
    status: true,
    result: category,
  });
});
app.get("/category", (req, res) => {
  const { id } = req.query;
  console.log(id);
  const newArr = category.filter((e) => {
    e.id == id;
  });
  res.json({
    status: true,
    result: newArr[0],
  });
  console.log(newArr[0]);
});
app.post("/category", (req, res) => {
  const { categ } = req.body;
  let id = category.length + 1;
  category.push({ id, category: categ });
  res.json({
    status: true,
    result: category,
  });
});
app.listen(port, () => {
  console.log({ port });
});
