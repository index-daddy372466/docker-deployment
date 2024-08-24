const express = require('express')
const app = express(),PORT = 9998



app.use(express.json())
app.use((req,res,next)=>{
    // Saying hello from middleware
    console.log('Hello there!')
    next();
})


app.get('/',(req,res)=>{
    res.status(200).send('Welcome to homepage!')
})

app.listen(PORT,()=>{
    console.log('Access granted on port ' + PORT)
})