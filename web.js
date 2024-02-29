const express = require('express')
const path = require('path')
const port = 8005


const app = express(); // 

app.use(express.static(path.join(__dirname, './outback/build')))

app.get('/',(req, res, next)=>{
  res.sendFile(path.join(__dirname, './outback/build/index.html'))      
})


app.listen(port, ()=>{
    console.log(`localhost:${port} 서버정상구동`)
})