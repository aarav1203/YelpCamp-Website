var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment	=require("./models/comment");
var data = [
	{
		name: "SummerCamping",
		image: "https://images.unsplash.com/photo-1579159575805-d6337ae2d496?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing L"
	},
	{
		name: "SummerCamping",
		image: "https://images.unsplash.com/photo-1575415868394-e3b78f3e9b3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing L"
	},
	{
		name: "winterCamping",
		image: "https://images.unsplash.com/photo-1520224388108-610d6baab339?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing L"
	}
]
function seedDB() {
	Campground.remove({}, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("campground removed!!!");
		}
		data.forEach(function (seed) {
			Campground.create(seed, function (err, campground) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("New data entered");
					Comment.create(
						{
							text:"This place is great ,but I wish there was internet",
							author:"Homer"
						},
						function(err,comment){
							if(err){
								console.log(err);
							}
							else{
								campground.comments.push(comment);
								campground.save();
								console.log("Created new Campground");
							}
						});
				}
			});
		});
	});
}
module.exports = seedDB;
