const express = require('express');
const passport = require('passport'); // Hur vi använder authensiering
const GoogleStrategy = require('passport-google-oauth20').Strategy; // instruerar passport hur användare ska hanteras med google
const keys = require('./config/keys'); // Path till nycklarnas

const app = express();

passport.use(
  new GoogleStrategy(
    {
      // Skapar en ny instans av GoogleStrategy
      clientID: keys.googleClientID, // keys.js
      clientSecret: keys.googleClientSecret, // keys.js
      callbackURL: '/auth/google/callback' // Vägen användare kommer att skickas till efter de har godkänt info hos google
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken: ' + accessToken);
      console.log('refreshToken: ' + refreshToken);
      console.log('profile: ' + profile);
    }
  )
);

// Route handler
app.get(
  '/auth/google', // När en användare kommer via denna URLen skicka vidare till passport
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google')); // Byt kod med google profil

const PORT = process.env.PORT || 5000;
app.listen(PORT);
