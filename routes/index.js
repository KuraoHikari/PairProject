const router = require("express").Router()
const Controller= require("../Controllers/controller")

router.get('/beranda', Controller.Beranda)///nampilin semua postingan yang ada
router.get('/bikinPost', Controller.home)
router.get('/deletepost/:id', Controller.home)
router.get('/editpost/:id', Controller.EditPostCat)
router.post('/editpost/:id', Controller.PostEditPost)
router.get('/editProfile/:id', Controller.home)


module.exports = router