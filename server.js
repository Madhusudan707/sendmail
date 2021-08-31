const express = require('express')
const Port = 3000
let server = express()
const Mailer = require('./mailer')


server.get('/',function(req,res){
    res.send("Hello world")
})

server.get('/maddy',function(req,res){
    res.end("Hi welcome to Maddy's Web Sever")
})

server.get('/SendMail',function(req,res){
    // Mailer.sendMail("madhusudan707@gmail.com").then(function(){
    //     res.send("Mail sent Successfully")
    // },function(){
    //     res.send("Some Error Occurred")
    // })

    Mailer.sendMail("madhusudan707@gmail.com",function(error,data){
        if(data){
            res.send("Mail Sent")
        }else{
            res.send("Internal Server Error")
        }
    })    
})
server.listen(Port,function(){
    console.log("Server is running",Port)
})