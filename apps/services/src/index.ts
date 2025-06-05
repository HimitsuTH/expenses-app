import express from "express";

const app = express();
const port = 3001;

app.get("/", (_, res) => {
  res.send("Hello from services!");
});

app.listen(port, () => {
  console.log(`Service running at http://localhost:${port}`);
});