const mongoose = require("mongoose")
const Schema = mongoose.Schema

const medyaSchema = new Schema({
    title: String,
    kapak: String,
    aciklama: String,
    user: Object,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Medya", medyaSchema)