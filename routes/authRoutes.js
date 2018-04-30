const passport = require('passport');

module.export = app => {
  app.get(
    '/auth/google', // När en användare kommer via denna URLen skicka vidare till passport
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google')); // Byt kod med google profil
};
