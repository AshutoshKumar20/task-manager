const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const connectDb = async () => {
    try {
       await pool.query("SELECT 1");
       console.log("Postgresql Connected Successflly"); 
    } catch (error) {
        console.log("Connection Failed", error.message);
        process.exit(1);
    }
}

module.exports = { pool, connectDb };