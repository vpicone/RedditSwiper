const Snoowrap = require('snoowrap');
const keys = require('../config/keys');

async function requireSnoo(req, res, next) {
  if (req.snoo) {
    next();
  } else if (req.user) {
    req.snoo = new Snoowrap({
      refreshToken: req.user.refreshToken,
      clientId: keys.redditClientID,
      clientSecret: keys.redditClientSecret,
      userAgent: keys.redditUserAgent,
    });
    next();
  }
}

module.exports = (app) => {
  app.get('/api/posts', requireSnoo, async (req, res, next) => {
    try {
      const posts = await req.snoo.getMe().getSavedContent({ limit: 10 });
      res.json(posts);
    } catch (e) {
      next(e);
    }
  });

  app.post('/api/posts/fetch', requireSnoo, async (req, res, next) => {
    try {
      const morePosts = await req.snoo.getMe().getSavedContent({
        limit: 50,
        append: false,
        after: req.body.lastPost,
      });
      res.json({ posts: morePosts, isFinished: morePosts.isFinished });
    } catch (e) {
      next(e);
    }
  });

  app.post('/api/posts/unsave', requireSnoo, async (req, res, next) => {
    try {
      const post = await req.snoo.getSubmission(req.body.postId).unsave();
      // const deletedPost = await req.snoo.getSubmission(req.body.postId).id;

      res.json(post);
      // return ID not result
    } catch (e) {
      next(e);
    }
  });

  app.post('/api/posts/save', requireSnoo, async (req, res, next) => {
    try {
      const saveResult = await req.snoo.getSubmission(req.body.postId).save();
      const saveBody = await req.snoo.getSubmission(req.body.postId).fetch();
      res.json(saveBody);
    } catch (e) {
      next(e);
    }
  });
};
