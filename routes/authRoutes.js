const passport = require('passport');
const crypto = require('crypto');
const keys = require('../config/keys');

module.exports = (app) => {
  app.get('/auth/reddit', passport.authenticate('reddit'));

  app.get('/login', (req, res) => {
    res.send(JSON.stringify(req.body));
  });

  app.get(
    '/auth/reddit/callback',
    passport.authenticate('reddit', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    },
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', async (req, res) => {
    if (req.user) {
      res.json(req.user);
    } else {
      res.send(false);
    }
  });
};
