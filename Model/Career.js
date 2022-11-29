const mongoose = require("mongoose")

const careerSchema = new mongoose.Schema({
 "title":{
    type: String
 },
 "category":{
    type: String
 },
 "location":{
    type: String
 },
 "link":{
    type: String
 }
})
const Career = mongoose.model("career", careerSchema)
module.exports = Career