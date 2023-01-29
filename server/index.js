const PORT = 8000;

const express = require("express");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://mozart:amadeus@cluster0.tgjmuwg.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/signup", (req, res) => {
  res.json("Hello");
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log("Server running on port ", PORT));
