//DO NOT TOUCH MADE BY CARLO
const jwt = require('jsonwebtoken');
const db = require('./db/dbinit');

module.exports = server => {
  server.use((req, res, next) => {
    if (!req.cookies.tokenId) {
      return next();
    }
    const { tokenId } = req.cookies;
    const token = jwt.verify(tokenId, 'secret-code');
    req.userId = token.id;
    next();
  }),
    server.use(async (req, res, next) => {
      if (req.userId) {
        const [singleUser] = await db
          .select('id', 'name', ' email', 'gravatar')
          .from('users')
          .where({ id: req.userId });
        req.user = singleUser;
        next();
      }
      return next();
    });
};
