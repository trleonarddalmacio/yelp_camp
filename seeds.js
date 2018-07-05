var mongoose = require("mongoose")
var Campground = require ("./models/Campground.js")
var Comment = require("./models/Comment.js")

var data = [
  {
    name: "Starry Sky", 
    image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcbebfe204ad7e04d558d7e0cbc0d2eb&auto=format&fit=crop&w=1950&q=80",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint culpa non consectetur rem dolores nihil obcaecati minima laborum, aut quidem! Quam quia, optio, iusto mollitia officiis nobis sit debitis itaque amet, neque beatae enim! Minus exercitationem ipsa libero cumque dolorem."
  },
  {
    name: "Cloud's Rest",
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1350&q=80",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint culpa non consectetur rem dolores nihil obcaecati minima laborum, aut quidem! Quam quia, optio, iusto mollitia officiis nobis sit debitis itaque amet, neque beatae enim! Minus exercitationem ipsa libero cumque dolorem."
  },
  {
    name: "Sun's Descent",
    image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-0.3.5&s=7fe3ce3d0c1333c5e2463f73d9652bac&auto=format&fit=crop&w=1950&q=80",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint culpa non consectetur rem dolores nihil obcaecati minima laborum, aut quidem! Quam quia, optio, iusto mollitia officiis nobis sit debitis itaque amet, neque beatae enim! Minus exercitationem ipsa libero cumque dolorem."
  }
]

function seedDb() {
  Campground.remove({}, function(err) {
    // if(err){
    //   console.log(err)
    // } else {
    //   console.log ("Campgrounds Removed!")

    //   data.forEach((seed) => {
    //     Campground.create(seed, (err, campground) => {
    //       if (err) {
    //         console.log(err)
    //       } else {
    //         console.log("added a campground")
    //         Comment.create(
    //           {
    //             text: "This place is great, but I wish there was Internet",
    //             author: "Homer"
    //           }, function (err, comment) {
    //             if(err) {
    //               console.log(err);
    //             } else {
    //               campground.comments.push(comment)
    //               campground.save()
    //               console.log("Created new comment")
    //             }
    //           }
    //         )
    //       }
    //     })
    //   })
    // }
  })
}

module.exports = seedDb;