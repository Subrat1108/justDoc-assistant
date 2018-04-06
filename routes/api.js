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
});

router.get('/questionaire/:ansId', function(req,res,next){
    Answers.find({_id : req.params.ansId},function(err,data){
        if(err) next(err);
        else{
            console.log(data);
            res.send(data);
        }
    });
});



module.exports = router;