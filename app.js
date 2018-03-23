var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var campgrounds = [
	{name: "Salmon Creek", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
	{name: "Granite Hill", image: "http://www.hiddenvalleydeadwood.com/sites/hiddenvalley/files/styles/navigation_tile_smart_phone/public/photos/amenity/camping/0150-hidden-valley-campground-2014-08-12.jpg?itok=z-Wrp7cd&timestamp=1514484420"},
	{name: "Montain Goat's Rest", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
	{name: "Zion's Gorge", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
		{name: "Salmon Creek", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
	{name: "Granite Hill", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
	{name: "Montain Goat's Rest", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
	{name: "Zion's Gorge", image: "https://www.dl-online.com/sites/default/files/styles/16x9_620/public/field/image/Aug.Sept_.SummerScene.Camping%20%281%29.jpg?itok=4bWG5K3R"},
];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//============== ROUTES =============///

app.get("/", function(req,res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};

	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});


//============= END ROUTES ============///

app.listen(3000, function() {
	console.log("The YelpCamp server has started...");
});