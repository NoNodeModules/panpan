const async = require("async")
const Sozluk = require("../../models/sozluk")
const Etiket = require("../../models/etiket")

exports.list = async (req, res, next) => {
    let sozluk = await Sozluk.find({})
    let etiket = await Etiket.find({})
    res.render("back/sozluk", {
        user: req.user,
        sozluk: sozluk,
        etiket: etiket,
        title: "Sözlük Konuları"
    })
}

exports.insert = async (req, res, next) => {
    new Sozluk(req.body).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/sozluk")
        }
    })
}

exports.delete = async (req, res, next) => {
    Sozluk.findByIdAndDelete({ "_id": req.params.id }, (err, data) => {
        if (!err) {
            res.redirect("/admin/sozluk")
        }
    })
}