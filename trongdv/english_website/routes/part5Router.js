var express = require('express');
var router = express.Router();
var dethi=require("../dbs/part5.json")

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('dethi/reading/part5');

});