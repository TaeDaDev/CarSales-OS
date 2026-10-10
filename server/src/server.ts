import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.json({ message: "Server is healthy and running!" });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
