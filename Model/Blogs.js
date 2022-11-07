const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://aadilkhan:1234@e-com.l2pmf.mongodb.net/?retryWrites=true&w=majority')

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