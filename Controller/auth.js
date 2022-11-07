const Admin = require("../Model/Admin");
const News = require("../Model/News");
const Blogs = require("../Model/Blogs");
const catchAsyncError = require("../Errorhandlers/catchAsyncError");
const ErrorResponse = require("../Utlis/errorresponse");
const jwt = require("jsonwebtoken")
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
// exports.addnews = catchAsyncError(
//     async(req, res, next)=>{
//         const {title ,  description, url }= req.body;
   
//     }
// )