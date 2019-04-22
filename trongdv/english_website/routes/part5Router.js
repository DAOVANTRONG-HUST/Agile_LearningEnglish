var express = require('express');
var router = express.Router();
var dethi=require("../dbs/part5.json")
var connectModel = require('../models/connect.js');

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('dethi/reading/part5');

});

/* POST lấy dữ liệu từ from. */
router.get('/submit', function (req, res, next) {
  var q_list = [];
   
  let i=1;
  
  dethi.PartI.bo_cau_hoi.forEach(function (cauhoi) {
    let a='a'+i;
    var item = {
      iq_id: cauhoi.id_cauhoi,
      explain: cauhoi.explain
    };

    if (cauhoi[a] == req.body[a]) {
      item.result = 1;
    } else {
      item.result = 0;
    }
    i++;

    q_list.push(item);
  })

  
res.json({ q_list: q_list });

});

/* GET thêm dữ liệu */
router.get('/them', function (req, res, next) {
  res.render('dethi/reading/CRUDPart5/them', { title: 'Them mơi dữ liệu' });
});

router.post('/them', function (req, res, next) {
  var dl = {
    'ten': req.body.ten,
    'dienthoai': req.body.dienthoai
  }
  var data = new contactModel(dl);
  data.save();
  res.redirect('xem');
});

module.exports = router;