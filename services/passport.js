const passport = require('passport'); // Hur vi använder authensiering
const GoogleStrategy = require('passport-google-oauth20').Strategy; // instruerar passport hur användare ska hanteras med google
const mongoose = require('mongoose');
const keys = require('../config/keys'); // Path till nycklarna

const User = mongoose.model('users'); // Få tillgång till User model class

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // Skapar en ny instans av GoogleStrategy
      clientID: keys.googleClientID, // keys.js
      clientSecret: keys.googleClientSecret, // keys.js
      callbackURL: '/auth/google/callback', // Vägen användare kommer att skickas till efter de har godkänt info hos google
      proxy: true // Sidan hostas på hos Heroku så därför måste jag godkänna proxy för att gå via https
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // Vi har redan en profil med det angivna ID
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
            displayName: profile.displayName
          })
            .save()
            .then(user => done(null, user)); // Skapar en ny instans av en användare och sparar till MongoDB
        }
      });
    }
  )
);
