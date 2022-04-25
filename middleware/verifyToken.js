const jwt = require("jsonwebtoken");

// verify user token from headers

const verifyToken = (req, res, next) => {
  // Retrieve token from headers
  const tokenWithBearer = req.headers.authorization;

  // Verify token if it exists and return an error if no token is found
  if (!tokenWithBearer) {
    return res.status(403).json({ error: "User not authenticated" });
  }
  // Split token

  const token = tokenWithBearer.split(" ")[1];

  try {
    // verify if the token is correct
    const user = jwt.verify(token, "secret");

    // attach the verified user to the req

    req.user = user;

    // attached the user to the req
    req.user = user;
  } catch (error) {
    //    verify with the user
    return res.status(403).json({ error: "User not authenticated" });
  }

  next();
};

// exports.VerifyToken

module.exports = {
  verifyToken,
};
