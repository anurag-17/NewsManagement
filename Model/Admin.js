const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/NewsProject');

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