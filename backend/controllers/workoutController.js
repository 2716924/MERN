const express = require('express')
const mongoose = require('mongoose')

const Workout = require('../models/workOutModel')


// get all workouts
const getWorkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1}) // leaving it blank gets all 
    res.status(200).json(workouts)
}


// get one workout
const getWorkout = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

// create 
const createWorkout = async (req,res) =>{
    const {title,load,reps} = req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json({workout})

    }catch(error){
        res.status(400).json({error : error.message})
    }
}

// delete a workout
const deleteWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
       return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


// update a workout
const updateWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body // spread the response
    })

    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json({workout})
} 


module.exports ={
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}