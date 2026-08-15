const mongoose = require("mongoose")


const Schema = mongoose.Schema

// Defines the structure
const workoutSchema = new Schema({
    title: { //enforces how the schema looks
        type : String,
        required : true
    },
    reps: {
        type : Number,
        required : true
    },
    load : {
        type : Number,
        required : true
    }
} , {
    timestamps:true
})

module.exports = mongoose.model('Workout', workoutSchema)
