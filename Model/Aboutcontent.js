const mongoose = require("mongoose")


const AboutSchema = new mongoose.Schema({
headline:{
    type:String                                                                                       
},
title_1:{
    type:String                                     
},
title_2:{
    type:String
},
title_3:{
    type:String
},
description_1:{
    type:String
},
description_2:{
    type:String
},
description_3:{
    type:String
},
banner_image:{
    type:String,
},
main_image:{
type:String,
}

})

const about = mongoose.model("about",AboutSchema)
module.exports = about;