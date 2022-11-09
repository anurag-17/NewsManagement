const express = require("express")
const { adminlogin, addnews, addblog, viewnews, viewblogs,  deleteblogs, editblogs } = require("../Controller/auth")
const router = express.Router()

router.route("/admin").post(adminlogin);
router.route("/addnews").post(addnews)
router.route("/addblogs").post(addblog)
router.route("/viewnews").get(viewnews)
router.route("/viewblogs").get(viewblogs)
router.route("/deleteblogs").post(deleteblogs)
router.route("/editblogs").post(editblogs)


module.exports = router;