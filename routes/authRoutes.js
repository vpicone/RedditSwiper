const passport = require("passport");

module.exports = app => {
  app.post(
    "/auth/reddit",
    passport.authenticate("reddit", { duration: "permanent" })
  );

  app.get("/login", (req, res) => {
    res.send(JSON.stringify(req.body));
  });

  app.get(
    "/auth/reddit/callback",
    passport.authenticate("reddit", { failureRedirect: "/login" }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );

  app.post("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", async (req, res) => {
    if (req.user) {
      res.json(req.user);
    } else {
      res.send(false);
    }
  });
};
