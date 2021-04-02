const async = require("async")
const User = require("../../models/user")

exports.uyeler = async (req, res, next) => {
    let uyeler = await User.find({})
    res.render("back/uyeler", {
        title: "Üye Listesi",
        uyeler: uyeler,
        user: req.user
    })
}

exports.yazar = async (req, res, next) => {
    let yazar = await User.find({})
    res.render("back/yazarlar", {
        title: "Yazar Listesi",
        yazar: yazar,
        user: req.user
    })
}

exports.yazarata = async (req, res, next) => {
    let uye = await User.findById({"_id":req.params.id})
    uye.update({
        type:1
    },(err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/uyeler")
        }
    })
}


exports.cevir = async (req, res, next) => {
    let uye = await User.findById({"_id":req.params.id})
    uye.update({
        type:2
    },(err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/yazar")
        }
    })
}
