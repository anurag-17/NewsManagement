const mongoose=require("mongoose")

const newsSchema = new mongoose.Schema({
    "title": {
        type: String
    },
    "catagory": {
        type: String
    },
    "url":{
        type:String,
      
    },
    "img":{
        type: String,
    }
})
const News = mongoose.model("news", newsSchema)
module.exports = News;