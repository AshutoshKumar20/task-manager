const { Pool } = require("pg");

const connectDb = async () => {
    try {
       await new Pool({connectionString: process.env.DATABASE_URL});
       console.log("Postgresql Connected Successflly"); 
    } catch (error) {
        console.log("Connection Failed", error.message);
        process.exit(1);
    }
}