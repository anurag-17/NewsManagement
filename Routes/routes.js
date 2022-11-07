const express = require("express")
const { adminlogin } = require("../Controller/auth")
const router = express.Router()

router.route("/admin").post(adminlogin);



module.exports = router;