const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const {pool} = require("../db");

const register = async (req, res) => {
    try{
        const { name, email, password} = req.body;

        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if(existingUser.rows.length > 0) {
        return  res.status(400).json({message: "Email already registered"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email", [name, email, hashedPassword]);
        res.status(201).json({message: "Email registered successfully"}, user.rows[0]);
    } catch(err) {
        console.log("Error Found", err.message);
    }
}

router.post("/register", register);
module.exports = router;