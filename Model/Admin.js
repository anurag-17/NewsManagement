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

const adminSchema = new mongoose.Schema({
    "email":{
        type : String,
        required: [true, "Provide ID"]
    },
    "password":{
        type : String,
        required: [true, "Provide passcode"],
        
    }
})
const Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin;