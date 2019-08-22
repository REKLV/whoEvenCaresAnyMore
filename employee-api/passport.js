const passport = require('passport');
const PassportLocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}), function(email, password, cb) {
    return cb(null, user, { message: 'Logged in successfully' })
});
