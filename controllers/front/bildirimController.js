const async = require("async")
const Bildirim = require("../../models/bildirim")
const Yorum = require("../../models/yorum")
const Sozluk = require("../../models/sozluk")

exports.insert = async(req,res,next)=>{
    let yorum = await Yorum.findById({"_id":req.body.user})
    new Bildirim({
        type:0,
        yorum:yorum,
        user:req.user,
        own:yorum.user
    }).save((err,data)=>{
        if (err) {
            console.lof(err)
        } else {
            console.log("Başarılı")
        }
    })
}

exports.insertsozluk = async(req,res,next)=>{
    let sozluk = await Sozluk.findById({"_id":req.body.sozluk})
    console.log(sozluk)
    new Bildirim({
        type:1,
        sozluk:sozluk,
        user:req.user,
        own:sozluk.user,
        title:req.body.yorum
    }).save((err,data)=>{
        if (err) {
            console.lof(err)
        } else {
            console.log("Başarılı")
        }
    })
}