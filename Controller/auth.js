const Admin = require("../Model/Admin");
const News = require("../Model/News");
const Blogs = require("../Model/Blogs");
const catchAsyncError = require("../Errorhandlers/catchAsyncError");
const ErrorResponse = require("../Utlis/errorresponse");
const jwt = require("jsonwebtoken");
const { query } = require("express");
var ObjectId = require('mongodb').ObjectId

// dotenv.config({ path: "../config.env" });


exports.adminlogin = catchAsyncError(
    async (req, res, next) => {
        const { email, password } = req.body;
        console.log(req.body);
       try {
        if (!email || !password) {
            return next(new ErrorResponse("please provide email or password", 400))
        }
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(500).json("invalid credentials user not found");
        }
        const isMatch = await Admin.findOne({ password });
        if (!isMatch) {
            return res.status(500).json("password is not valid please register")
        }
        const key = "asdcc345uub44200hg4ff6ujv46784ecb"
        const token = jwt.sign({
            user_id: email
        }, key, {expiresIn: "2h"})
      
      
      
        res.json({
        admin, token
       })
       } catch (error) {
        console.log(error);
       }  



    }
)
exports.addnews = catchAsyncError(
    async(req, res, next)=>{
        console.log(req.body);
        const {title ,  description, url, date }= req.body;
        try {
            let newsdata = new News({
                title, description, url, date
            })
            newsdata.save().then((result)=>{
                console.log("successfully news feeded");
            }).catch((err)=>{
                console.log(err, "news feederror");
            })
        } catch (error) {
            console.log(error);
        } 
        
    }
)

exports.addblog = catchAsyncError(
    async(req, res, next)=>{
        console.log(req.body);
        const {title ,  description, url }= req.body;
        try {
            let blogdata = new Blogs({
                title, description, url
            })
            blogdata.save().then((result)=>{
                console.log("successfully blog feeded");
            }).catch((err)=>{
                console.log(err, " blog feederror");
            })
        } catch (error) {
            console.log(error);
        } 
        
    }
)
exports.viewnews = catchAsyncError(
    async(req, res)=>{
        try {
             News.find({}, (error, result)=>{
                if (error) {console.log(error , "viewnews error")}
                res.send({result})
            } )
            
        } catch (error) {
           console.log(error , "catchviewnews error"); 
        }
    }
)
exports.viewblogs = catchAsyncError(
    async(req, res)=>{
        try {
             Blogs.find({}, (error, result)=>{
                if (error) {console.log(error , "viewblog error")}
                res.send({result})
            } )
            
        } catch (error) {
           console.log(error , "catchviewblog error"); 
        }
    }
)
exports.deleteblogs = catchAsyncError(
    async(req, res, next)=>{
        let uid = req.body.params
        console.log(req.body.params);
        try {
             Blogs.findByIdAndRemove({_id: uid}).then().catch((error)=>{
                console.log(error);
            }) 
        } catch (error) {
            console.log(error ,"delete blog");
        }
    }

)
exports.deletenews = catchAsyncError(
    async(req, res, next)=>{
        let uid = req.body.params
        try{
            News.findByIdAndRemove({_id: uid}).then().catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error, "delete news");
        }
    }
)
exports.editidnews = catchAsyncError(
    async(req, res, next)=>{
        try {
            let uid = req.body.params
            console.log(req.body.params);
            News.findById({_id: uid},(error,result)=>{
                if (error) {
                    console.log(error, "editidnews");
                }
                console.log(result)
                res.send({result})
            })
        } catch (error) {
            console.log(error, "catcheditidnews");
        }
    }
)

exports.editnews =catchAsyncError(
    async(req, res, next)=>{
        console.log(req.body);
        await News.findByIdAndUpdate({_id : new ObjectId(req.body._id)},{"title": req.body.title, "description": req.body.description, "url": req.body.url}),(error, data)=>{
            if (error) {
                console.log(error, "updatenews");
            } else {
                console.log(data);
            }
        }
    }
)



exports.editid = catchAsyncError(
    async(req, res, next)=>{
        try {
            let uid = req.body.params
            Blogs.findById({_id: uid}, (error, result)=>{
             if (error) {
                 console.log(error, "editid");
             }
             res.send({result})
            })
        } catch (error) {
            console.log(error);
        }
       
       
    }
)


exports.editblogs = catchAsyncError(
    async(req, res, next)=>{
        console.log(req.body);
        await Blogs.findByIdAndUpdate({_id: new ObjectId(req.body._id)}, {"title": req.body.title, "description": req.body.description, "url": req.body.url}),(error, data)=>{
            if (error) {
                console.log(error, "updateblog");
            } else {
                console.log(data);
            }
        }
    }
)