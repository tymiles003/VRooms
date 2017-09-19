const express = require("express");
const passport = require("passport");
const path = require("path");
var User = require('../models/user');


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
    res.clearCookie("userId",{ path: '/' });

    // req.session.destroy(function (err) {
    //     res.redirect('/'); //Inside a callback… bulletproof!
    // });

    res.redirect("/");
});

//Add email cookie to get user logged in..
// router.post("/signup", passport.authenticate("local-signup",{ failureRedirect: "/signup" },
// //  {
// //   successRedirect: "/",
// //   failureRedirect: "/signup",
// //   failureFlash: true,
// // }
// (req,res) => {
//     console.log("USer after signup === ", req);
//     // res.cookie("email",req.newUser.local.email);
//     res.redirect("/");
// }
// ));


router.post(
    "/signup",
    passport.authenticate("local-signup", { failureRedirect: "/signup" }),
  (req, res) => {
      res.cookie("email",req.user.local.email);
      res.cookie("userId",req.user._id);
      res.redirect("/");
  });


// router.post(
//     "/login",
//     passport.authenticate("local-login", { failureRedirect: "/signup" }),
//   (req, res) => {
//       res.cookie("email",req.user.local.email);
//       res.redirect("/");
//   });

router.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { 
        if(req.session.flash){
        console.log("login message === ", JSON.stringify(req.session.flash.loginMessage[0]));
        let message = (req.session.flash.loginMessage[0]);
        return res.redirect(`/signup?message=${message}`); 
        }
        else{
            return res.redirect("/signup");
        }
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.cookie("email",req.user.local.email);
      res.cookie("userId",req.user._id);

      return res.redirect("/");
    });
  })(req, res, next);
});





router.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: "email" })
);

router.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/signup" }),
  (req, res) => {
      res.cookie("email",req.user.facebook.email);
      res.cookie("userId",req.user._id);

      res.redirect("/");
  });

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", { failureRedirect: "/signup" }),
  (req, res) => {
      res.cookie("email",req.user.twitter.displayName);
      res.cookie("userId",req.user._id);

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
  passport.authenticate("google", { failureRedirect: "/signup" }),
  (req, res) => {
      res.cookie("email",req.user.google.email);
      res.cookie("userId",req.user._id);

      res.redirect("/");
  });

router.post("/emailExists",function(req,res){
    console.log("req body == ", req.body);
    
    User.findOne({ 'local.email':  req.body.email }, function(err, user) {
        if (err)
            return res.send(err);
        if (user) {
          return res.send('failure');
        }
        else{
            return res.send("success");
        }
    });
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
}




module.exports = router;
