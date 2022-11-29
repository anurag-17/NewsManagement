const Admin = require("../Model/Admin");
const News = require("../Model/News");
const Blogs = require("../Model/Blogs");
const catchAsyncError = require("../Errorhandlers/catchAsyncError");
const ErrorResponse = require("../Utlis/errorresponse");
const Content = require("../Model/Content")
const Email = require("../Model/Email")
const Career = require("../Model/Career")
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
            return res.status(500).json("Invalid Credentials")
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
        const {title ,  catagory, url, img }= req.body;
        try {
            let newsdata = new News({
                title, catagory, url, img
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
        console.log(req.body)
        const {title ,description, url }= req.body;
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

exports.validadmin = catchAsyncError (
    async(req, res, next)=>{
        const {email} = req.body;
        try {
            const admin = await Admin.findOne({email})
            if (!admin) {
                return res.status(500).send("Invalid email")
            }
        } catch (error) {
            console.log(error);
        }
        res.send("otp send")
    }

) 
exports.optsave = catchAsyncError (
    async(req, res, next)=>{
        console.log(req.body)
        const {otp ,email} = req.body
       const data = await Admin.findOneAndUpdate({email}, {otp})

    return res.send(data)
    }

) 
exports.otpvalid = catchAsyncError(
    async(req, res, next)=>{
        const {otp} = req.body
        if (otp) {
            try {
                const adminotp =   await Admin.findOne({otp})
                console.log(adminotp);
              //   return  res.json(adminotp)
                if (!adminotp) {
                  return res.status(500).json("Invalid Otp")
                }
                if (adminotp) {
                  return res.json(adminotp)
                }
              } catch (error) {
                  console.log(error);
              }
              res.send("valid") 
        }
       if (!otp) {
         return res.status(500).json("Invalid Otp")
       }
       
    }
    
)
exports.passwordchange = catchAsyncError(
    async(req, res, next)=>{
        const {id, newpassword} = req.body
        console.log(req.body);
        try {
            await Admin.findByIdAndUpdate({_id: new ObjectId(req.body._id)},{password: newpassword, otp: ""}, (error, result)=>{
                if (error) {
                    console.log(error);
                }
                if (result) {
                 console.log(result)   
                 res.send("updated")
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
)

exports.useremail = catchAsyncError(
    async(req, res, next)=>{
        console.log(req.body);
        const {email} = req.body
        try {
            let useremail = new Email({email})

            useremail.save().then((result)=>{
                res.send("Submitted Successfully")
                console.log("successfully feeded email");
            }).catch((err)=>{
                console.log(err, " email feederrror");
            })
        } catch (error) {
            console.log(error);
        }
    }
)
exports.viewemail = catchAsyncError(
    async(req,res, next)=>{
        try {
           await Email.find({}, (error, result)=>{
            if (error) {
                console.log(error, "viewemail");
            }
            res.send({result})
           }) 
        } catch (error) {
            console.log(error, "viewemail_catch");
        }
    }
)


exports.useremail = catchAsyncError(
    async (req, res, next) => {
        console.log(req.body);
        const { email } = req.body
        try {
            let useremail = new Email({ email })

            useremail.save().then((result) => {
                res.send("Submitted Successfully")
                console.log("successfully feeded email");
            }).catch((err) => {
                console.log(err, " email feederrror");
            })
        } catch (error) {
            console.log(error);
        }
    }
)
exports.viewemail = catchAsyncError(
    async (req, res, next) => {
        try {
            Email.find({}, (error, result) => {
                if (error) {
                    console.log(error, "viewemail");
                }
                res.send({ result })
            })
        } catch (error) {
            console.log(error, "viewemail_catch");
        }
    }
)
exports.deleteemail = catchAsyncError(
    async (req, res, next) => {
        let uid = req.body.params
        try {
            Email.findByIdAndRemove({ _id: uid }).then((resp) => {
                res.send("successfully deleted")
            }).catch((e) => {
                console.log(e);
            })
        } catch (error) {
            console.log(error, "delete_email");
        }
    }
)
exports.addcareer = catchAsyncError(
    async (req, res, next) => {
        const { title, category, location, link } = req.body;
        if (title && category && location && link) {
            try {
                let career = new Career({ title, category, location, link })
                career.save().then((result) => {
                    console.log("Successfully Submitted");
                })
            } catch (error) {
                console.log(error, "addcareer");
            }
        } else {
            res.send("All field required")
        }
    }
)

exports.viewcareer = catchAsyncError(
    async(req, res, next)=>{
        try {
            await Career.find({}, (error, result)=>{
                if (error) {
                    console.log(error, "Viewcareer");
                }
                res.send({result})
            })
        } catch (error) {
            console.log(error,"catch view career");
        }
    }
)
