var express = require('express');
var router = express.Router();

router.post('/doCalculation', function (req, res, next) {

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var op = req.body.operator;
    // calculating result based on the operator
    var answer = 0;
    switch(op){
        case '+':
            answer = Number(num1) + Number(num2);
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
	    if(num2 == 0) answer = 'You can not divide by 0';
	    else answer = num1 / num2;
            break;
    }
    res.status(201).json({message: answer});
});

module.exports = router;
