const express = require("express")
const router = require("./routes")
const app = express()
const port = 8000
var session = require("express-session")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))
app.use(router)

app.listen(port , ()=>{
    console.log("run" , port)
})

