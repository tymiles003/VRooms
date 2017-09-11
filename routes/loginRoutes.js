const express = require("express");
const passport = require("passport");
const path = require("path");

const router = express.Router();

// router.get('/login', function(req, res, next) {
//   res.render('login.ejs', { message: req.flash('loginMessage') });
// });

// router.get('/signup', function(req, res) {
//   res.render('signup.ejs', { message: req.flash('signupMessage') });
// });

// router.get('/profile', isLoggedIn, function(req, res) {
//   res.render('profile.ejs', { user: req.user });
// });

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

router.post(
    "/signup",
    passport.authenticate("local-signup", {
        successRedirect: "/profile",
        failureRedirect: "/signup",
        failureFlash: true
    })
);

// router.post("/login", function(req,res){
//   console.log("inside login post route");
// });

router.post(
    "/login",
    passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })
);

router.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: "email" })
);

router.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
);

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
);

// router.get("/glogin", function(req,res){
//   console.log("inside /auth/google");
//   passport.authenticate('google', { scope: ['profile', 'email'] });
// });

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
);

// router.get("/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/auth/google" }),
//   (req, res) => res.redirect("OAuthLogin://login?user=" + JSON.stringify(req.user)));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
}

module.exports = router;
