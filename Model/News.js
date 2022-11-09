const mongoose=require("mongoose")
const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://aadilkhan:1234@e-com.l2pmf.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log("db connected")
    }).catch((error)=>{
        console.log(error);
    })
}

connectDB()

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