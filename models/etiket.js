const mongoose = require("mongoose")
const Schema = mongoose.Schema

const etiketSchema = new Schema({
    tag:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Etiket",etiketSchema)