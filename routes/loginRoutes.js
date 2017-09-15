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

router.get("/logout/", function(req, res) {
    req.logout();
    res.clearCookie("email", { path: '/' });
    res.clearCookie('connect.sid', { path: '/' }); 
    // req.session.destroy(function (err) {
    //     res.redirect('/'); //Inside a callback… bulletproof!
    // });

    res.redirect("/");
});

router.post("/signup", passport.authenticate("local-signup", {
  successRedirect: "/",
  failureRedirect: "/signup",
  failureFlash: true,
}));

router.post(
    "/login",
    passport.authenticate("local-login", { failureRedirect: "/login" }),
  (req, res) => {
      res.cookie("email",req.user.local.email);
      res.redirect("/");
  });

router.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: "email" })
);

router.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
      res.cookie("email",req.user.facebook.email);
      res.redirect("/");
  });

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", { failureRedirect: "/login" }),
  (req, res) => {
      res.cookie("email",req.user.twitter.displayName);
      res.redirect("/");
  });


router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);


// router.get(
//     "/auth/google/callback",
//     passport.authenticate("google", {
//         successRedirect: "/",
//         failureRedirect: "/login"
//     })
// );

router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
      res.cookie("email",req.user.google.email);
      res.redirect("/");
  });



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
}

module.exports = router;
