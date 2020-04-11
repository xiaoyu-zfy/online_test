var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')    // post数据需要的模块
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

//解析json数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));//这两个是和post请求有关系的
app.use(express.urlencoded({ extended: false }));//这个是和get又关系的

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;

// app.listen('3000')

