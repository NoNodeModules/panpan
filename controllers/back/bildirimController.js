const async = require("async")
const Bildirim = require("../../models/bildirim")
const User = require("../../models/user")

exports.insert = async(req,res,next)=>{
    new Bildirim(req.body).save((err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/bildirim")
        }
    })
}

exports.list = async(req,res,next)=>{
    let bildirim = await Bildirim.find({})
    let user = await User.find({"type":2})
    res.render("back/bildirim",{
        title:"Bildirimler",
        bildirim:bildirim,
        user:user
    })
}