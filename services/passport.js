const passport = require('passport'); // Hur vi använder authensiering
const GoogleStrategy = require('passport-google-oauth20').Strategy; // instruerar passport hur användare ska hanteras med google
const mongoose = require('mongoose');
const keys = require('../config/keys'); // Path till nycklarna

const User = mongoose.model('users'); // Få tillgång till User model class

passport.use(
  new GoogleStrategy(
    {
      // Skapar en ny instans av GoogleStrategy
      clientID: keys.googleClientID, // keys.js
      clientSecret: keys.googleClientSecret, // keys.js
      callbackURL: '/auth/google/callback' // Vägen användare kommer att skickas till efter de har godkänt info hos google
    },
    (accessToken, refreshToken, profile, done) => {
      new User({
        googleId: profile.id,
        displayName: profile.displayName
      }).save(); // Skapar en ny instans av en användare och sparar till MongoDB
      console.log(profile);
    }
  )
);
