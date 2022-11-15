const mongoose = require("mongoose")


const contentSchema = new mongoose.Schema({
logo:{
    type:String
},
main_title_1:{
    type:String
},
main_title_2:{
    type:String
},
tagline:{
    type:String
},
main_subtitle_1:{
    type:String
},
main_subtitle_2:{
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