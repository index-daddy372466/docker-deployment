const express = require('express')
const app = express(),PORT = 9998


app.use(express.json())
app.use((req,res,next)=>{
    // Saying hello from middleware
    console.log('Hello there!')
    next();
})

// home page
app.get('/api/home',(req,res)=>{
    res.status(200).send('Welcome to homepage!')
})

// test docker api
app.get('/api/docker',(req,res)=>{
res.send('Welcome to DockerSpace!')
})

// array of  numbers
const numbers = [...new Array(100).fill('')].map((x,index)=> index + 1);
app.get('/api/numbers',(req,res)=>{
    res.status(200).json({numbers:numbers})
})

app.listen(PORT,()=>{
    console.log('Access granted on port ' + PORT)
})

