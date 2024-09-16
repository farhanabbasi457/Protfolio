const mongoose = require("mongoose");
const feedbacks = mongoose.Schema({
    text:{type:String },
    stars:{type:String },
    date:{type:String},
})

module.exports = mongoose.model("feedbacks", feedbacks);