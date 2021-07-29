const { checkPassword } = require("../helpers/bcrypt")
const {HastagCat, Post, PostHastag , Profile , UserCat, Register} = require("../models")

class userController {

    static registerForm(req, res) {
        res.render("register")
    }

    static registerData(req, res) {
        const newData = {
            email : req.body.email,
            password : req.body.password
        }
        
        Register
            .create(newData)
            .then(data => {
                res.send(data)
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
        Register
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
                        res.send("Incorrect Email or Password")
                    }
                } else {
                    console.log(err);
                    res.send(err)
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = userController