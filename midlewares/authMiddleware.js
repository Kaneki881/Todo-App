const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.headers["Authorization"];
    if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]; 
    }
   
    const username = jwt.verify(token, "amine2024");
    if ( username ) return next();
    res.status(401).send({ Error: "Unauthorized ..." });
  } catch (e) {
    res.status(401).send({ Error: "Unauthorized ..." });
  }
};

module.exports = { auth };
