const {HastagCat, Post, PostHastag , Profile , UserCat, Register} = require("../models")


class Controller{
    static home(req,res){
        res.send("masuk")
    }
}
module.exports = Controller