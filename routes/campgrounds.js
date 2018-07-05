var express = require("express");
var router = express.Router();
var Campground = require('../models/Campground');

// INDEX ROUTE - place where all campgrounds are shown, the index or root of all campgrounds
router.get("/", function(req, res) {
	Campground.find( {}, function(err, campgrounds){
		if (err) {
			console.log("Something went wrong in finding campground");
		} else {
			res.render("campgrounds/index", {
        campgrounds: campgrounds,
        currentUser: req.user
      });
		}
	});
});

// CREATE ROUTE - saves that data from NEW ROUTE to the DB
router.post("/", isLoggedIn, function(req, res) {
  console.log(req.body);

	var name = req.body.name;
	var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCampground = {name: name, image: image, description: desc, author: author};

	Campground.create(newCampground, function(err, newlyCreated){
		if (err) {
			console.log(err);
		} else {
      newlyCreated.save();
			res.redirect("/campgrounds");
		}
	});
});

// NEW ROUTE - the form where to save the data
router.get("/new", isLoggedIn, function(req, res) {
	res.render("campgrounds/new");
});

// SHOW  ROUTE - shows info about one campground, ** ORDER OF ROUTE IS IMPORTANT! **
router.get("/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if (err) {
			console.log(err);
		} else {
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/login")
}

module.exports = router;