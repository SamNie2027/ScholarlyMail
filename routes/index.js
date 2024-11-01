var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
const mailInfo = require('./mailInfo');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Auth0 Webapp sample Nodejs',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.use(mailInfo);

module.exports = router;

