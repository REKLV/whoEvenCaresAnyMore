const jwt = require('jsonwebtoken');

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({message: 'unsuccessful login attempt'}).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, "secret", (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    db.getUserById(userId, function(rows) {
        if (err || !rows[0]) {
            return res.status(401).json({message: 'User not found [auth-check]'}).end();            
        } else {
            return next();            
        }     
    })

  });
};