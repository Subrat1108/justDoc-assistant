var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Answers = mongoose.model('answers');

router.route('/questionaire')

.post(function(req,res){
    var ans = new Answers();
    ans.name = req.body.name;
    ans.age = req.body.age;
    ans.symptoms = req.body.symptoms;
    ans.save(function(err, submits) {
        if (err){
            return res.send(500, err);
        }
        return res.send(submits._id);
    });
})

// .get(function(req, res){
//     Answers.find(function(err, thoughts){
//         if(err){
//             return res.send(500, err);
//         }
//         return res.send(thoughts);
//     });
// });



module.exports = router;