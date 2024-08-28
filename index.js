require('dotenv').config()
import express from 'express';
const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})