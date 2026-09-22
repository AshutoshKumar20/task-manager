const jwt = require("jsonwebtoken");


const protect = async(req, res, next) => {
try {
const token = req.headers["authorization"];
if(!token) {
    return res.status(401).json({message: "Token not found"});
}
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = decoded;
next()
} catch(err) {
    console.log("Error Found", err.message);
    res.status(401).json({message: "Invalid or expired token"});
}
};

module.exports = protect;