const express = require('express');
const router = express.Router();
const mainController = require("../controllers/back/mainController")
const ayarController = require("../controllers/back/ayarController")
const sozlukController = require("../controllers/back/sozlukController")
const etiketController = require("../controllers/back/etiketController")
const uyelerController = require("../controllers/back/uyelerController")
const bildirimController = require("../controllers/back/bildirimController")

router.get("/", mainController.index)
router.get("/firmalar", mainController.firmalar)
router.get("/iletisim", mainController.iletisim)

router.get("/sozluk", sozlukController.list)
router.post("/sozluk", sozlukController.insert)
router.get("/sozluk/sil/:id", sozlukController.delete)

router.get("/etiket", etiketController.list)
router.post("/etiket", etiketController.insert)
router.get("/etiket/sil/:id", etiketController.delete)

router.get("/bildirim", bildirimController.list)
router.post("/bildirim", bildirimController.insert)

router.get("/kategori", ayarController.list)
router.post("/kategori/ekle", ayarController.insert)
router.get("/kategori/:id", ayarController.delete)

router.get("/uyeler", uyelerController.uyeler)
router.get("/yazar", uyelerController.yazar)
router.get("/uye/yazarata/:id",uyelerController.yazarata)
router.get("/uye/cevir/:id",uyelerController.cevir)



module.exports = router;