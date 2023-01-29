const PORT = 8000;
const express = require("express");
const { MongoClient } = require("mongodb");
const { v1: uuidv1 } = require("uuid");
const jwt = require("jsonwebtoken");
const uri =
  "mongodb+srv://mozart:amadeus@cluster0.tgjmuwg.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  const generatedUserId = uuidv1();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const sanitizedEmail = email.toLowerCase();
    const existingUser = users.findOne({ sanitizedEmail });

    if (existingUser) {
      return res.status(409).send("User already exists. Please log in");
    }

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });

    res
      .status(201)
      .json({ token, userId: generatedUserId, email: sanitizedEmail });
  } catch (error) {
    console.log(error);
  }
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
