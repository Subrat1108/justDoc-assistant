var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var path = require('path');
var multer = require('multer');
var Answers = mongoose.model('answers');
var Files =  mongoose.model('files');

var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
      cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
  });

var uploads =  multer({storage:storage});

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

router.post('/upload', uploads.any(), function (req, res, next) {
    
    var newUpload = {
        created_by : req.body.current_user,
        file: req.files
      };
      Files.create(newUpload, function (err, next) {
        if (err) {
          next(err);
        } else {
          res.send(newUpload);
        }
      });
  
  });

  router.get('/upload/:userId', function(req,res,next){
    Files.find({ created_by : req.params.userId},function(err,data){
        if(err) next(err);
        else{
            console.log(data[0].file);
            res.send(data);
        }
    });
});
module.exports = router;