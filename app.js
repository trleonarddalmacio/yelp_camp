let express 				= require("express"),
	app 				    	= express(),
	bodyParser 				= require("body-parser"),
  mongoose          = require("mongoose"),
  passport          = require("passport"),
  LocalStrategy     = require("passport-local"),

  Campground        = require("./models/Campground"),
  Comment           = require("./models/Comment"),
  User              = require("./models/User"),

  seedDB            = require("./seeds")

let commentRoutes   = require("./routes/comments"),
  campgroundRoutes  = require("./routes/campgrounds"),
  authRoutes        = require("./routes/auth")
 
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// seedDB();

// Passport Configuration
app.use(require("express-session")({
  secret: "Super SECRET!",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use(authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


//============== ROUTES =============///



app.listen(3000, function() {
	console.log("The YelpCamp server has started...");
});