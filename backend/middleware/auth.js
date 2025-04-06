const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(allowedRoles = []) {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({ message: "Token is required" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;

      if (!req.user.isActive) {
        return res.status(403).json({ message: "Account is inactive" });
      }

      if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
}

module.exports = verifyToken;
