const {HastagCat, Post, PostHastag , Profile , UserCat} = require("../models")
class Controller{
    static home(req,res){
        res.send(masuk)
    }
    static Beranda(req,res){
        Post.findAll({
            include:[UserCat]
        })
        .then(data=>{
            res.render("berandaParaKucing", {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static EditPostCat(req,res){
        Post.findByPk(req.params.id, {include:[UserCat]})
        .then(data=>{
            res.render("editPostCat", {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static PostEditPost(req,res){
        let id = req.params.id
        Post.update({
            title: req.body.title,
            story: req.body.story,
            image: req.body.image
        }, 
        {
            where: { id: id }
        }
        )
        .then(data=>{
            res.redirect('/beranda')
        })
        .catch(err => {
            res.send(err)
        })
    }
    
}
module.exports = Controller