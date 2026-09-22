require("dotenv").config();
const express = require("express");
const app = express();
const { pool, connectDb } = require("./db")
const port = process.env.PORT;
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes")
console.log("taskRoutes type:", typeof taskRoutes);

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/", taskRoutes);
connectDb();
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});