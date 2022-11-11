const express = require("express")
const { adminlogin, addnews, addblog, viewnews, viewblogs,  deleteblogs, editblogs, editid, editidnews, editnews, deletenews, addcontent, content, updateContent, getcontent } = require("../Controller/auth")
const router = express.Router()

router.route("/admin").post(adminlogin);
router.route("/addnews").post(addnews)
router.route("/addblogs").post(addblog)
router.route("/viewnews").get(viewnews)
router.route("/viewblogs").get(viewblogs)
router.route("/deleteblogs").post(deleteblogs)
router.route("/editblogs").post(editblogs)
router.route("/editid").post(editid)
router.route("/editidnews").post(editidnews)
router.route("/editnews").post(editnews)
router.route("/deletenews").post(deletenews)
router.route("/content").post(updateContent)
router.route("/getcontent").get(getcontent)
module.exports = router;