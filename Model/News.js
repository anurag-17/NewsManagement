const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/NewsProject')

const newsSchema = new mongoose.Schema({
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
const news = mongoose.model("news", newsSchema)
module.exports = news;