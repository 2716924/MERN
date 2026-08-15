const express = require(`express`)

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")
const Workout = require('../models/workOutModel')
const router = express.Router();

// get all the workouts
router.get('/', getWorkouts)

// get one workout
router.get('/:id', getWorkout)

// post a workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// update a workout
// put changes all the fields whereas patch changes only the selected field 
router.patch('/:id',updateWorkout)


module.exports = router