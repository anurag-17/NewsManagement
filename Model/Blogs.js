const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/NewsProject')

const blogSchema = new mongoose.Schema({
    "title": {
        type: String
    },
    "description": {
        type: String
    },
    "imageUrl":{
        type:String,
      
    },
    
})
const blogs = mongoose.model("blogs", blogSchema)
module.exports = blogs;