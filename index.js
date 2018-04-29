const express = require('express');
const passport = require('passport'); // Hur vi använder authensiering
const GoogleStrategy = require('passport-google-oauth20').Strategy; // instruerar passport hur användare ska hanteras med google
const keys = require('./config/keys'); // Path till nycklarnas

const app = express();


// Skapar en ny instans av GoogleStrategy
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,// keys.js
    clientSecret: keys.googleClientSecret,// keys.js
    callbackURL: "/auth/google/callback" // Vägen användare kommer att skickas till efter de har godkänt info hos google
  }, (accessToken) => {
    console.log(accessToken);
  })
); 

const PORT = process.env.PORT || 5000;
app.listen(PORT);