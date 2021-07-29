const router = require("express").Router()
const Controller= require("../Controllers/controller")
const userController = require("../Controllers/userController")
var session = require("express-session")

router.get('/beranda', checkisLogin, Controller.Beranda)///nampilin semua postingan yang ada
router.get('/bikinPost', checkisLogin, Controller.BikinPostingan)
router.post('/bikinPost', checkisLogin, Controller.postBikinPostingan)

router.get('/deletepost/:id', checkisLogin, Controller.deletePost)
router.get('/editpost/:id', checkisLogin,  Controller.EditPostCat)
router.post('/editpost/:id', checkisLogin,  Controller.PostEditPost)

router.get("/register", userController.registerForm)
router.post("/register", userController.registerData)

router.get("/login", userController.formLogin)
router.post("/login", userController.login)

function checkisLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect("/register")
    }
}


module.exports = router