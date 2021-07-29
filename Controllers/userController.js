const { checkPassword } = require("../helpers/bcrypt")
const {HastagCat, Post, PostHastag , Profile , UserCat} = require("../models")

class userController {

    static registerForm(req, res) {
        res.render("register")
    }

    static registerData(req, res) {
        const newData = {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phone: req.body.phone
        }
        
        UserCat
            .create(newData)
            .then(data => {
                res.redirect("/login")
            })
            .catch(err => {
                res.send(err.errors[0].message)
            }) 
    }

    static formLogin(req, res) {
        res.render("login")
    }

    static login(req, res) {
        const {email , password} = req.body
        UserCat
            .findOne({
                where: {
                    email : email 
                }
            })
            .then(data => {
                if (data) { 
                    const isPasswordMatch = checkPassword(password, data.password)
                    if (isPasswordMatch) {
                        req.session.isLogin = true
                        req.session.userId = data.id
                        req.session.email = data.email
                        res.redirect("/beranda")
                    } else {
                        res.send(err)
                    }
                } else {
                    console.log(err);
                    res.send(err)
                }
            })
            .catch(err => {
                console.log(err)
                res.render("error")
            })
    }
}

module.exports = userController