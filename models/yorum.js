const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const yorumSchema = new Schema({
    user:Object,
    isim:String,
    yorum:String,
    konu:Object,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Yorum",yorumSchema)