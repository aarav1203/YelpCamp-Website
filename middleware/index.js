var Campground=require("../models/campground");
var Comment=require("../models/comment");
var middlewareObj={};
middlewareObj.checkCampgroundOwnership=function(req,res,next){
        if (req.isAuthenticated()) {
            Campground.findById(req.params.id, function (err, foundCampground) {
                if (err) {
                    req.flash("Campground not found!");
                    res.render("back");
                }
                else {
                    if (foundCampground.author.id.equals(req.user.id)) {
                        next();
                }
            }
            });
        }
        else {
            req.flash("error","You don't have permission to do that")
            res.redirect("back");
        }
    }
middlewareObj.checkCommentOwnership=function(req,res,next){
        if (req.isAuthenticated()) {
            Comment.findById(req.params.comment_id, function (err, foundComment) {
                if (err) {
                    req.flash("You don't have permission");
                    res.render("back");
                }
                else {
                    if (foundComment.author.id.equals(req.user.id)) {
                        next();
                }
            }
            });
        }
        else {
            req.flash("You need to be logged in do that");
            res.redirect("back");
        }
    }
middlewareObj.isLoggedIn=function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash("error","You need to be logged in first!");
        res.redirect("/login");
    }
module.exports=middlewareObj;