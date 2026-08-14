require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

const app = express()

const PORT = process.env.PORT || 4000

// middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

app.use(express.json()) //checks requests to the server if it has a body

//routes
app.use('/api/workouts', workoutRoutes)

// we do not need this one anymore since we are using workoutRoutes
// app.get('/', (req, res) => {
//     res.json({ mssg: 'Welcome to the app' })
// })

// connect to the DB
mongoose.connect(process.env.MONG_URI)
    .then(() =>{
        app.listen(PORT, '127.0.0.1', () => {
        console.log(`connected to db & Listening on http://127.0.0.1:${PORT}`)
})
    })
    .catch((error) =>{
        console.log("Failed to connect to db")
    })

