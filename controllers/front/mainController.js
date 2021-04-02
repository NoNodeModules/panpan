const async = require("async")
const Sozluk = require("../../models/sozluk")
const Yorum = require("../../models/yorum")
const Etiket = require("../../models/etiket")
const User = require("../../models/user")
const Begen = require("../../models/begen")
const Bildirim = require("../../models/bildirim")
const moment = require("moment")
const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name: "panipal",
    api_key: "696114387999363",
    api_secret: "rL5AcC0ga8MtLBlIHmoy2oi7Gqs"
});

moment.locale("tr")

exports.index = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 })
    let etiket = await Etiket.find({})
    res.render("front/index", {
        title: 1,
        user: req.user,
        sozluk: sozluk,
        etiket: etiket,
        moment: moment
    })
}


exports.profil = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    let yorum = await Yorum.find({ "user._id": req.user._id })
    let begen = await Begen.find({ "user._id": req.user._id })
    res.render("front/auth/profil", {
        title: "",
        user: req.user,
        sozluk: sozluk,
        yorum: yorum,
        begen: begen,
        moment: moment,
        user: req.user
    })
}

exports.myprofil = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    res.render("front/myprofile", {
        title: "",
        user: req.user,
        sozluk: sozluk,
        moment: moment,
        user: req.user
    })
}

exports.guncelle = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    res.render("front/guncelle", {
        title: "",
        user: req.user,
        sozluk: sozluk,
        moment: moment,
        user: req.user
    })
}

exports.ayar = async (req, res, next) => {
    res.render("front/set/setting", {
        title: "",
        user: req.user
    })
}

exports.hesap = async (req, res, next) => {
    res.render("front/set/hesap", {
        title: "",
        user: req.user
    })
}

exports.baglanti = async (req, res, next) => {
    res.render("front/set/baglanti", {
        title: "",
        user: req.user
    })
}

exports.guvenlik = async (req, res, next) => {
    res.render("front/set/guvenlik", {
        title: "",
        user: req.user
    })
}

exports.bildirim = async (req, res, next) => {
    let bildirim = await Bildirim.find({"own._id":req.user._id}).sort({createdAt:-1})
    console.log(bildirim)
    res.render("front/bildirim", {
        title: "Bildirimler",
        bildirim:bildirim,
        user: req.user
    })
}

exports.pro = async (req, res, next) => {
    res.render("front/set/pro", {
        title: "",
        user: req.user
    })
}

exports.hes = async (req, res, next) => {
    res.render("front/set/hes", {
        title: "",
        user: req.user
    })
}

exports.magaza = async (req, res, next) => {
    let etiket = await Etiket.find({})
    res.render("front/magaza/magaza", {
        title: "",
        user: req.user,
        etiket: etiket
    })
}

exports.magazaic = async (req, res, next) => {
    res.render("front/magaza/magazaic", {
        title: "",
        user: req.user
    })
}


exports.mesajicc = async (req, res, next) => {
    res.render("front/mesajic", {
        title: "",
        user: req.user
    })
}

exports.duzenle = async (req, res, next) => {
    res.render("front/duzenle", {
        title: "",
        user: req.user
    })
}

exports.eris = async (req, res, next) => {
    res.render("front/set/eris", {
        title: "",
        user: req.user
    })
}

exports.ista = async (req, res, next) => {
    res.render("front/set/ista", {
        title: "",
        user: req.user
    })
}

exports.cloudupload = async (req, res, next) => {
    cloudinary.uploader.upload(req.body.resim,
        function (data, err) {
            console.log(data)
            res.json({
                status: true,
                resim: data
            })
        });

}

exports.reklam = async (req, res, next) => {
    res.render("front/reklam", {
        title: "",
        user: req.user
    })
}