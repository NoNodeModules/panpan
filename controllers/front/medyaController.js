const async = require("async")
const Medya = require("../../models/medya")
const Etiket = require("../../models/etiket")
const moment = require("moment")
moment.locale("tr")

exports.list = async (req, res, next) => {
    let medya = await Medya.find({})
    let etiket = await Etiket.find({})
    res.render("front/medya/medya", {
        user: req.user,
        etiket,
        medya,
        title:""
    })
}

exports.msingle = async (req, res, next) => {
    let medya = await Medya.findById({"_id":req.params.id})
    res.render("front/medya/medyaic", {
        user: req.user,
        medya,
        moment:moment,
        title:""
    })
}

exports.medyaekle = async (req, res, next) => {
    new Medya({
        user:req.user,
        title:req.body.title,
        aciklama:req.body.aciklama,
        kapak:req.body.kapak
    }).save((err,data)=>{
        if (err) {
            res.json({status:false})
        } else {
            res.json({status:true})
        }
    })
}