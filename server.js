require("dotenv").config();
const express = require("express");
const app = express();
const { pool, connectDb } = require("./db")
const port = process.env.PORT;
const authRoutes = require("./routes/authRoutes");
app.use(express.json());
app.use("/auth", authRoutes);
connectDb();
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});