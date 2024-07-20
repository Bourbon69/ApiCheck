const express = require('express')


const app = express()

app.use(express.json())


app.post('/',(req,res)=>{
    console.log(req.body)
    res.status(200).json(req.body)
})


app.listen(4040, ()=>{
    console.log('Server running on port 4040')
})
