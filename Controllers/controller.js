const {HastagCat, Post, PostHastag , Profile , UserCat} = require("../models")
class Controller{
    static home(req,res){
        res.send(masuk)
    }
    static Beranda(req,res){
        let datasesi = req.session
        Post.findAll({
            include:[HastagCat, UserCat],
        })
        .then(data=>{
            res.render("berandaParaKucing", {data , datasesi })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static BikinPostingan(req,res){
        let id = req.session.UserId
        HastagCat.findAll()
        .then(hastag=>{
            res.render("PostSesuatu" , {hastag})
        })
        .catch(err=>{
            res.send(err)
        })
        
    }
    static postBikinPostingan(req,res){
        let id = req.session.userId
   
        Post.create(
        { 
            title: req.body.title,
            story: req.body.story,
            image: req.body.image,
            UserCatId: id
        })
        .then(data=>{
            return PostHastag.bulkCreate([
                {
                PostId: data.id,
                HastagId: req.body.HastagId[0]
            },
            {
                PostId: data.id,
                HastagId: req.body.HastagId[1]
            },
            {
                PostId: data.id,
                HastagId: req.body.HastagId[2]
            }])
        })
        .then(data=>{
            res.redirect("/beranda")
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
    static deletePost(req,res){
        let id = req.params.id
        Post.destroy({
            where: { id: id }
        })
        .then(data=>{
            res.redirect('/beranda')
        })
        .catch(err => {
            res.send(err)
        })
    }
    
}
module.exports = Controller