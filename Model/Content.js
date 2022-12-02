const mongoose = require("mongoose")


const contentSchema = new mongoose.Schema({
seotitle:{
    type:String
},
description:{
    type:String
},
keyword:{
    type:String
},
pagename:{
    type:String
}
})

const content = mongoose.model("content",contentSchema)
module.exports = content;