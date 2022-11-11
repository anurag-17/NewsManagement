const mongoose=require("mongoose")

const newsSchema = new mongoose.Schema({
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
        type: String,
    }
})
const News = mongoose.model("news", newsSchema)
module.exports = News;