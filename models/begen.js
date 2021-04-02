const mongoose = require("mongoose")
const Schema = mongoose.Schema

const begenSchema = new Schema({
    yorum:Object,
    user:Object,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Begen",begenSchema)