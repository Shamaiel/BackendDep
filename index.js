const express = require("express")
require("dotenv").config()
const app = express()

const PORT= process.env.PORT

app.get("/", (req, res)=>{
    res.send({msg: "Base endpoint"})

})

app.get("/about", (req, res)=>{
    res.send({msg: "this is about page"})

})

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})