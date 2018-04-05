var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({

    name : String,
    date : {type: Date, default : Date.now},
    age : Number,
    symptoms : {
        headache : Boolean,
        vomiting : Boolean,
        fever : Boolean,
        weakness : Boolean,
        rashes : Boolean
    }

});

mongoose.model('answers',answerSchema);
