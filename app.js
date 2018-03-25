var express 				= require("express"),
		app 						= express(),
		bodyParser 			= require("body-parser"),
		mongoose 				= require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Granite Hill", 
// 		image: "http://www.hiddenvalleydeadwood.com/sites/hiddenvalley/files/styles/navigation_tile_smart_phone/public/photos/amenity/camping/0150-hidden-valley-campground-2014-08-12.jpg?itok=z-Wrp7cd&timestamp=1514484420",
// 		description: "This is a huge granite hill, no bathrooms. No water. Beautiful Granite!",
// 	},
// 	function (err, campground){
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			console.log("Newly created campground!");
// 			console.log(campground);
// 		}
// 	}
// );

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//============== ROUTES =============///

app.get("/", function(req,res){
	res.render("landing");
});

// INDEX ROUTE - place where all campgrounds are shown, the index or root of all campgrounds
app.get("/campgrounds", function(req, res) {
	Campground.find({}, function(err, campgrounds){
		if (err) {
			console.log("Something went wrong in finding campground");
		} else {
			res.render("index", {campgrounds: campgrounds});
		}
	});
});

// CREATE ROUTE - saves that data from NEW ROUTE to the DB
app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};

	Campground.create(newCampground, function(err, newlyCreated){
		if (err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});

// NEW ROUTE - the form where to save the data
app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

// SHOW  ROUTE - shows info about one campground, ** ORDER OF ROUTE IS IMPORTANT! **
app.get("/campgrounds/:id", function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampground){
		if (err) {
			console.log(err);
		} else {
			res.render("show", {campground: foundCampground});
		}
	});
});

//============= END ROUTES ============///

app.listen(3000, function() {
	console.log("The YelpCamp server has started...");
});