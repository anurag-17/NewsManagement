const cors = require("cors")
const bodyparser = require("body-parser")
const express = require("express");
const app = express()

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({ limit: "500kb", extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/auth', require('./Routes/routes'))

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

app.listen(5000, ()=>{
    console.log("running on 5000");
})