const express=require("express");
const router=express.Router();

const feedbacksC=require("../controller/feedbacksC");

router.post("/",feedbacksC.feedbackspost);

module.exports=router;