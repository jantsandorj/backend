const express = require("express");
const cors = require("cors");

const app = express();
const port = 6060;

app.use(cors());
app.get("/", (request, response) => {
  //   response.send("hello express");
  response.json({ status: true, result: [{ id: 1, name: "jack" }] });
});
app.get("/add", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) + Number(b);
  response.json({ value: result });
});
app.get("/minus", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) - Number(b);
  response.json({ value: result });
});
app.get("/divide", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) / Number(b);
  response.json({ value: result });
});
app.get("/urjver", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) * Number(b);
  response.json({ value: result });
});
app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
