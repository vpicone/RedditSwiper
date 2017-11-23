const passport = require("passport");
const RedditStrategy = require("passport-reddit").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");
const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new RedditStrategy(
    {
      clientID: keys.redditClientID,
      clientSecret: keys.redditClientSecret,
      callbackURL: "/auth/callback",
      scope: ["history", "save", "read"],
      authorizationURL: "https://ssl.reddit.com/api/v1/authorize.compact",
      state: true,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ redditId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        redditId: profile.id,
        // accessToken,
        refreshToken,
        profile
      }).save();
      done(null, user);
    }
  )
);
