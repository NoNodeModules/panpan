const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mesajSchema = new Schema({
    user1:Object,
    user2:Object,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Mesaj",mesajSchema)