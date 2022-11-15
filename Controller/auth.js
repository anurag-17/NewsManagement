const Admin = require("../Model/Admin");
const News = require("../Model/News");
const Blogs = require("../Model/Blogs");
const catchAsyncError = require("../Errorhandlers/catchAsyncError");
const ErrorResponse = require("../Utlis/errorresponse");
const Content = require("../Model/Content")
const jwt = require("jsonwebtoken");
const { query } = require("express");
var ObjectId = require('mongodb').ObjectId

// dotenv.config({ path: "../config.env" });

exports.adminlogin = catchAsyncError(
    async (req, res, next) => {
        const { email, password } = req.body;
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
            await Blogs.find({}, (error, result)=>{
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
          await Blogs.findByIdAndRemove({_id: uid}).then().catch((error)=>{
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
           await News.findByIdAndRemove({_id: uid}).then().catch((error)=>{
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
           await News.findById({_id: uid},(error,result)=>{
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
        await News.findByIdAndUpdate({_id : new ObjectId(req.body._id)},{"title": req.body.title, "description": req.body.description, "url": req.body.url, "date": req.body.date}),(error, data)=>{
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
            await Blogs.findById({_id: uid}, (error, result)=>{
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

exports.addcontent = catchAsyncError(
    async(req,res,next)=>{
      const data =   await Content.create({
            logo:req.body.logo,
            main_title_1:req.body.main_title_1,
            main_title_2:req.body.main_title_2,
            main_subtitle_1:req.body.main_subtitle_1,
            main_subtitle_2:req.body.main_subtitle_2,
            main_btn_text:req.body.main_btn_text,
            main_image:req.body.main_image,
            tagline:req.body.tagline
        })
        return res.status(201).json(data)
    }
)


exports.updateContent = catchAsyncError(
    async(req,res,next)=>{
      const data =   await Content.findByIdAndUpdate(req.body.id,{
        logo:req.body.logo,
        main_title_1:req.body.main_title_1,
        main_title_2:req.body.main_title_2,
        main_subtitle_1:req.body.main_subtitle_1,
        main_subtitle_2:req.body.main_subtitle_2,
        main_btn_text:req.body.main_btn_text,
        main_image:req.body.main_image,
        tagline:req.body.tagline
        })
        return res.status(200).json(data)
    }
)


exports.getcontent = catchAsyncError(   async(req,res,next)=>{
    const data =  await Content.find()
      return res.status(200).json(data)
  })