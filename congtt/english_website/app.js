var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const mongoose = require('mongoose');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
<<<<<<< HEAD
var dashboardRouter=require('./routes/dashboard');
=======
var dethiRouter = require('./routes/dethi');
>>>>>>> 94a7ce47ab042afed886cc8bd44f7a38470a9cdb

var app = express();
mongoose.connect('mongodb://localhost/englishWebsite',{ useNewUrlParser: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
<<<<<<< HEAD
app.use('/dashboard',dashboardRouter);
=======
app.use('/de-thi', dethiRouter);
>>>>>>> 94a7ce47ab042afed886cc8bd44f7a38470a9cdb

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
