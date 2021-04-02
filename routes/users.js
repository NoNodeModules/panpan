var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('front/auth/register2', {});
});

router.post('/register', function(req, res) {
    User.register(new User({ username: req.body.username, item: req.body }),
        req.body.password,
        function(err, user) {
            if (err) {
                return res.render('front/auth/register2', { user: user });
            }

            passport.authenticate('local')(req, res, function() {
                res.redirect('/');
            });
        });
});

router.get('/login', function(req, res) {
    res.render('front/auth/login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get("/reg",function (req,res,next) {
    res.render("front/auth/reg",{
        user:req.use
    })
})

router.get("/log",function (req,res,next) {
    res.render("front/auth/log",{
        user:req.use
    })
})

module.exports = router;