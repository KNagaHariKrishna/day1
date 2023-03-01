const express = require('express')
const mongoose = require('mongoose');
const app = express()
const reguser=require('./models/Regschema')
const bodyParser=require("body-parser")
const cors = require("cors")

// const fileUpload = require("express-fileupload")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('DB Connected!'));

// app.get('/user', (req, res) => {
//     res.send('Hello World')
// })
// app.post("/login",(req,res)=>{
//     const userlogin=req.body

// })
app.post("/register",async (req,res)=>{
    const { username, age, mobnum, password }=req.body
    console.log(req.body);
    try{
        const user = await reguser.create({
            username: username,
            age: age,
            mobnum: mobnum,
            password: password,
        })
        res.send({
            status: "Ok",
            user,
        });
        console.log(user);
    }
    catch(e){
        res.json({message:e})
    }

})

app.listen(5000, () => { console.log("serveris started at 5000 port"); })