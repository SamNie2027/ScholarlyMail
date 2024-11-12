const express = require('express');
const mailInfo = express.Router('/mailInfo');
const { requiresAuth } = require('express-openid-connect');


mailInfo.get('/', requiresAuth(), function (req, res, next) {
    res.render('profile', {
      userProfile: JSON.stringify(req.oidc.user, null, 2),
      title: 'Mail info page'
    });
});

//https://stackoverflow.com/questions/12025820/how-to-send-array-of-ids-correctly-in-express
mailInfo.post('/:keyWords', requiresAuth(), function (req, res, next) {
    res.render('profile', {
      userProfile: JSON.stringify(req.oidc.user, null, 2),
      title: 'Mail info page'
    });
});

module.exports = mailInfo;