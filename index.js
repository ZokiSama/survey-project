const express = require('express');
const passport = require('passport'); // Hur vi använder authensiering
const GoogleStrategy = require('passport-google-oauth20').Strategy; // instruerar passport hur användare ska hanteras med google

const app = express();
const keys = require('./config/keys');

// Skapar en ny instans av GoogleStrategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,//keys.js
  clientSecret: keys.googleClientSecret,//keys.js
  callbackURL: "http://localhost:5000/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id },
  function (err, user) {
    return cb(err, user);
  });
}
)); 

const PORT = process.env.PORT || 5000;
app.listen(PORT);