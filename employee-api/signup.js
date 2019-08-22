const PassportLocalStrategy = require('passport-local').Strategy;
const db = require('./db.js');

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };
  console.log('signup.js is used');

//     db.insertUser({email: 'some@test.com', password: 'password', name: 'nametest'})

  db.insertUser(userData, function(id) {
      console.log('signup form database call is hit');
      return done(id);
  });
});