const async = require("async")
const Kategori = require("../../models/kategori")

exports.list = async(req,res,next)=>{
    let kategori = await Kategori.find({})

    res.render("back/kategori",{
        title:"Kategoriler",
        kategori:kategori
    })
}

exports.insert = async(req,res,next)=>{
    new Kategori(req.body).save((err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/kategori")
        }
    })
}


exports.delete = async(req,res,next)=>{
    let kategori = await Kategori.findById({"_id":req.params.id})

    kategori.remove((err,data)=>{
        if (err) {
            console.lof(err)
        } else {
            res.redirect("/admin/kategori")
        }
    })
}