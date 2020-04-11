var express = require('express');
var router = express.Router();
var user = require('../controllers/usersInformation')

/* GET home page. */
// router.get('/', user.getuser);

router.post('/' , user.login)

router.post('/register' , user.register)

router.get('/home' , user.test)

router.get('/exam' , user.startTest)

router.get('/student' , user.warehouse)

router.post('/startPractice' , user.startPractice)

module.exports = router;
