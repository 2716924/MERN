require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

// middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()

})

app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
})

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`)
})