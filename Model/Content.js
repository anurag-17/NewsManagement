const mongoose = require("mongoose")


const contentSchema = new mongoose.Schema({
logo:{
    type:String
},

main_title:{
    type:String
},
tagline:{
    type:String
},
main_subtitle:{
    type:String
},
main_btn_text:{
    type:String
},
main_image:{
    type:String,
}

})

const content = mongoose.model("content",contentSchema)
module.exports = content;