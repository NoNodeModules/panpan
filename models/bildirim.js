const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bildirimSchema = new Schema({
    title:String,
    type:Number, // 0 yorum beğeni 1 konuya yorum 2 medyaya yorum
    yorum:Object,
    sozluk:Object,
    user:Object, //* genel _id özel
    own:Object,
    desc:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Bildirim",bildirimSchema)