const router = require("express").Router()
const Controller= require("../Controllers/controller")

router.get('/beranda', Controller.home)
router.get('/bikinPost', Controller.home)
router.get('/deletepost/:id', Controller.home)
router.get('/editpost/:id', Controller.home)
router.get('/editProfile/:id', Controller.home)


module.exports = router