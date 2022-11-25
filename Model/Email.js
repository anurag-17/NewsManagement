const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    "email": {
        type: String
    },
   
})
const Email = mongoose.model("email", newsSchema)
module.exports = Email;