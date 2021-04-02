const mongoose = require("mongoose")
const Schema = mongoose.Schema

const chatSchema = new Schema({
    mid:String,
    text:String,
    user:Object,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Chat",chatSchema)