var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/logindb";

router.post('/getuser', function (req, res, next) {

    var reqEmail = req.body.requsername;
    try {
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('login');



            coll.findOne({emailid: reqEmail}, function(err, user){
                if (user) {
                    console.log("User fetched");
                    res.status(201).json({user});

                } else {
                    console.log("Error fetching user");
                    res.status(401).json({message:"Error!"});
                }
            });



            
        });
    }
    catch (e){
        done(e,{});
    }
});

module.exports = router;