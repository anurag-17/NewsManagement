const mongoose=require("mongoose")


const blogSchema = new mongoose.Schema({
    "title": {
        type: String
    },
    "description": {
        type: String
    },
    "url":{
        type:String,
      
    },
    "date":{
        type:String
    }
    
})
const blogs = mongoose.model("blogs", blogSchema)
module.exports = blogs;