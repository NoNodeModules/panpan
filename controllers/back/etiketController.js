const async = require("async")
const Etiket = require("../../models/etiket")

exports.list = async(req,res,next)=>{
    let etiket = await Etiket.find({})
    res.render("back/etiket",{
        user:req.user,
        etiket:etiket,
        title:"Etiketler"
    })
}

exports.insert = async(req,res,next)=>{
    new Etiket(req.body).save((err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/etiket")
        }
    })
}

exports.delete = async(req,res,next)=>{
    Etiket.findByIdAndDelete({"_id":req.params.id},(err,data)=>{
        if (!err) {
            res.redirect("/admin/etiket")
        }
    })
}