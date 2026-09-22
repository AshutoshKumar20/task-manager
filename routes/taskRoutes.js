const express = require("express");
const router = express.Router();
const {pool} = require("../db");
const protect = require("../middleware/authmiddleware");

router.post("/tasks", protect, async(req, res, next) => {
try{
    const {title, description} = req.body;
    const userId = req.user.userId;

    const result = await pool.query("INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *", [title, description, userId]);
    res.status(201).json({message: "Task Completed Successfully", task: result.rows[0]});
}catch(err) {
    console.log("Error Found", err.message);
    res.status(500).json({message: err.message});
}
});

module.exports = router;