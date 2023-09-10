const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const questionSchema = new Schema({
    title:{
        type:String,
        required:[true,"A question cannot be me empty"],
        minLength:1,
        trim:true,
        lowercase:true,
    },
    answers:[{
        type:String,
        required:[true,"A question must have an answer"],
        minLength: 1,
        trim:true,
        lowercase: true,
    }],
    level:{
        type:String,
        enum:["A1","A2","B1","B2","C1","C2"],
    },
});

const Question = new mongoose.model('Question',questionSchema);

module.exports = Question;
