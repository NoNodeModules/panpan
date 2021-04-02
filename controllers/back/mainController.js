const async = require("async")
const User = require("../../models/user")
const Sozluk = require("../../models/sozluk")

exports.index = async(req, res, next) => {
    let uye = await User.find({"type":2}).count()
    let yazar = await User.find({"type":1}).count()
    let sozluk = await Sozluk.find({}).count()
    res.render("back/index", {
        title: "Anasayfa",
        uye:uye,
        yazar:yazar,
        sozluk:sozluk
    })
}

exports.firmalar = async(req, res, next) => {
    let firmalar = await User.find({})
    res.render("back/firmalar", {
        title: "Firma Listesi",
        firmalar: firmalar,
        user: req.user
    })
}

exports.urunler = async(req, res, next) => {
    let urun = await Urun.find({})
    res.render("back/urunler", {
        title: "Ürün Listesi",
        urun: urun,
        user: req.user
    })
}

exports.siparis = async(req, res, next) => {
    res.render("back/siparis", {
        title: "Sipariş Listesi"
    })
}

exports.sozluk = async(req, res, next) => {
    res.render("back/sozluk", {
        title: "Sözlük Konuları"
    })
}

exports.iletisim = async(req, res, next) => {
    res.render("back/iletisim", {
        title: "İletişim Talepleri"
    })
}