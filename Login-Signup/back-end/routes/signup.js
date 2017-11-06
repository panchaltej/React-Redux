var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/logindb";

router.post('/dosignup', function (req, res, next) {

    var reqFirstname = req.body.firstname;
    var reqLastname = req.body.lastname;
    var reqEmail = req.body.emailid;
    var reqPassword = req.body.password;
    console.log("Inserttttttt");
    try {
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('login');



            coll.findOne({emailid: reqEmail}, function(err, user){
                if (user) {
                    console.log("User already exists");
                    res.status(401).json({message:"User Exists"});

                } else {
                    coll.insert({firstname: reqFirstname, lastname:reqLastname, emailid:reqEmail, password:reqPassword}, function(err, result) {
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log("Inserted a document into the login collection.");
                            res.status(201).send();
                            //callback();
                        }
                    });
                }
            });



            
        });
    }
    catch (e){
        done(e,{});
    }
});

module.exports = router;