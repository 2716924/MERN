const express = require(`express`)

const router = express.Router();

// get all the workouts
router.get('/', (req,res)=>{
    res.json({mssg: 'GET all workouts'})
})

// get one workout
router.get('/:id', (req,res) =>{
    res.json({mssg:'Get a single workout'})
})

// post a workout
router.post('/', (req,res) =>{
    //req.body()
    res.json({mssg: 'Post a new workout'})
})

// delete a workout
router.delete('/:id', (req,res) =>{
    res.json({mssg: 'Delete a workout'})
})

// update a workout
// put changes all the fields whereas patch changes only the selected field 
router.patch('/:id', (req,res) =>{
    res.json({mssg: 'Update a workout'})
})


module.exports = router