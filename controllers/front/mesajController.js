const async = require("async")
const Mesaj = require("../../models/mesaj")
const Chat = require("../../models/chat")
const User = require("../../models/user")
const Bildirim = require("../../models/bildirim")

exports.mesajlar = async (req, res, next) => {
    let mesaj = await Mesaj.find({ "userid": req.user._id })

    if (mesaj) {
        res.json({
            status: true,
            mesah: mesaj
        })
    } else {
        res.json({
            status: false,
            mesaj: "Henüz hiç mesajınız yok."
        })
    }
}

exports.createmessage = async (req, res, next) => {
    let user2 = await User.findById({ "_id": req.body.user2 })
    new Mesaj({
        user1: req.user,
        user2: user2
    }).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ status: true })
        }
    })
}

exports.chatgetir = async (req, res, next) => {
    let chat = await Chat.find({ "mid": req.body.mid }).sort({ createdAt: 1 })

    if (chat) {
        res.json({
            status: true,
            chat: chat
        })
    } else {
        res.json({
            status: false,
            chat: {}
        })
    }
}

exports.sendmessage = async (req, res, next) => {
    new Chat({
        mid: req.body.mid,
        text: req.body.text,
        user: req.user
    }).save((err, data) => {
        if (err) {
            res.json({ status: false })
        } else {
            new Bildirim({title:"",url:"",user:req.user,desc:""})
            res.json({ status: true })
        }
    })
}

exports.mesaj = async (req, res, next) => {
    let mesaj = await Mesaj.find({$or:[{"user1._id": req.user._id},{"user2._id": req.user._id}]})

    console.log(mesaj[0].user1._id.toString() == req.user._id.toString())
    console.log(mesaj[0].user2._id.toString() == req.user._id.toString())

    res.render("front/mesaj/mesaj", {
        title: "",
        mesaj: mesaj,
        user: req.user
    })
}

exports.mesajic = async (req, res, next) => {
    let mesaj = await Mesaj.findById({ "_id": req.params.id })
    res.render("front/mesaj/mesajicc", {
        user: req.user,
        mesaj: mesaj
    })
}

