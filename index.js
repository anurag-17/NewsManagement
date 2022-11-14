const cors = require("cors")
const bodyparser = require("body-parser")
const express = require("express");
const app = express()
const mongoose = require("mongoose")
const Admin = require("./Model/Admin")

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({ limit: "500kb", extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/auth', require('./Routes/routes'))

const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://aadilkhan:1234@e-com.l2pmf.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log("db connected")
    }).catch((error)=>{
        console.log(error);
    })
}

connectDB()

function verifytoken(req, res, next) {
    let token = req.query[0];
    console.log(token);
    if (token != undefined) {
        let Rtoken = token.replaceAll('"', "");
  
        jwt.verify(Rtoken, "asdcc345uub44200hg4ff6ujv46784ecb", (error, authdata) => {
            if (error) {
                res.status(403)
            }
            else {
                console.log(authdata);
            } next();
        });
    }
    else {
        res.json({ message: "error" });
  
    }
  }
  app.get("/api/auth/adminin",verifytoken,async(req,res,next)=>{
    res.json({
      message: "welcome admin"
  })
  })

app.post("/api/auth/signup",async(req,res,next)=>{
const data = await Admin.create({
    email:req.body.email,
    password:req.body.password
})
return res.status(201).json(data)
})

app.listen(5000, ()=>{
    console.log("running on 5000");
})