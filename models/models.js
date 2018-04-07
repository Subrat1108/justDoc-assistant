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

var fileSchema = new mongoose.Schema({
    file : Object,
    created_by : String
});

mongoose.model('answers',answerSchema);
mongoose.model('files',fileSchema);
