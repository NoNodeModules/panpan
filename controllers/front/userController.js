const async = require("async")
const User = require("../../models/user")
const Sozluk = require("../../models/sozluk")
const Yorum = require("../../models/yorum")
const Begen = require("../../models/begen")
const moment = require("moment")
moment.locale("tr")

exports.probio = async (req, res, next) => {
    let user = await User.findById({ "_id": req.user._id })
    user.update({
        photo: req.body.photo,
    }, (err, data) => {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
}

exports.bioyaz = async(req,res,next)=>{
    let user = await User.findById({"_id":req.user._id})
    user.update({
        bio:req.body.bio
    },(err,data)=>{
        if (err) {
            res.json({status:false})
        } else {
            res.json({status:true})
        }
    })
}

exports.baglanti = async(req,res,next)=>{
    let user = await User.findById({"_id":req.user._id})
    user.update({
        social:{
            linkedin:req.body.linkedin,
            twitter:req.body.twitter,
            facebook:req.body.facebook
        }
    },(err,data)=>{
        if (err) {
            res.json({status:false})
        } else {
            res.json({status:true})
        }
    })
}

exports.kisi = async (req, res, next) => {
    let kisi = await User.findById({ "_id": req.params.id })
    let sozluk = await Sozluk.find({ "user._id": kisi._id })
    let yorum = await Yorum.find({ "user._id": kisi._id })
    let begen = await Begen.find({ "user._id": kisi._id })
    res.render("front/auth/myprofile", {
        user: req.user,
        sozluk: sozluk,
        yorum: yorum,
        begen: begen,
        kisi: kisi,
        moment: moment,
        title:"Deneme"
    })
}