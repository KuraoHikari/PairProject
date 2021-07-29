const router = require("express").Router()
const Controller= require("../Controllers/controller")
const userController = require("../Controllers/userController")

router.get('/beranda', Controller.home)
router.get('/bikinPost', Controller.home)
router.get('/deletepost/:id', Controller.home)
router.get('/editpost/:id', Controller.home)
router.get('/editProfile/:id', Controller.home)

router.get("/register", userController.registerForm)
router.post("/register", userController.registerData)

router.get("/login", userController.formLogin)
router.post("/login", userController.login)

function checkisLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect("/")
    }
}


module.exports = router