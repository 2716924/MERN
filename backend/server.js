require('dotenv').config()

const express = require('express')
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

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`)
})