var express = require('express');
var partI_md = require("../models/partI");
var partII_md = require("../models/partII");
var partIII_md = require("../models/partIII");
var partIV_md = require("../models/partIV");
var partV_md = require("../models/partV");
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
var chuyenthanhObjectId = require('mongodb').ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'englishWebsite';


// function cham diem

function caculatorTest(req, res, part) {


  var q_list = [];
  part.bo_cau_hoi.forEach(function (cauhoi) {

    var item = {
      iq_id: cauhoi.id_cauhoi,
      explain: cauhoi.explain
    };
    if (cauhoi.answer == req.body[cauhoi.sign]) {
      item.result = 1;
    } else {
      item.result = 0;
    }

    q_list.push(item);
  })


  res.json({ q_list: q_list });

}

/* GET users listing. */

/* GET home page. */
router.get('/', function (req, res, next) {

  partI_md.find({}, function (err, data_partI) {

    partII_md.find({}, function (err, data_partII) {

      partIII_md.find({}, function (err, data_partIII) {
        partIV_md.find({}, function (err, data_partIV) {
        partV_md.find({}, function (err, data_partV) {
          var data = {
            partI: data_partI,
            partII: data_partII,
            partIII: data_partIII,
            partIV: data_partIV,
            partV: data_partV
          }
          console.log(data);
          res.render("dethi/danhsachdethi", { data: data });


        });
        });


      });

    });



  });



});


router.get('/list_part1', function (req, res, next) {


  partI_md.find({}, function (err, data) {

    res.render("dethi/dsPart1", { data: data });

  })

});



/* GET home page. */
router.get('/part1/:id', function (req, res, next) {
  var id = chuyenthanhObjectId(req.params.id);

  partI_md.findById(id, function (err, dethi) {
    res.render('dethi/listening/part1', { dethi: dethi });
  })
});


router.post('/part1/:id', function (req, res) {
  var id = chuyenthanhObjectId(req.params.id);
  partI_md.findById(id, function (err, dethi) {
    caculatorTest(req, res, dethi.PartI);
  });



})


/* Part 2*/
router.get('/part2/:id', function (req, res, next) {
  var id = chuyenthanhObjectId(req.params.id);

  partII_md.findById(id, function (err, dethi) {
    res.render('dethi/listening/part2', { dethi: dethi });
  })

});


router.post('/part2/:id', function (req, res) {
  var id = chuyenthanhObjectId(req.params.id);
  partII_md.findById(id, function (err, dethi) {
    caculatorTest(req, res, dethi.PartII);
  });


});


/* Part 3*/
router.get('/part3/:id', function (req, res, next) {
  var id = chuyenthanhObjectId(req.params.id);

  partIII_md.findById(id, function (err, dethi) {
    res.render('dethi/listening/part3', { dethi: dethi });
  })

});
router.post('/part3/:id', function (req, res) {
  var id = chuyenthanhObjectId(req.params.id);
  partIII_md.findById(id, function (err, dethi) {
    caculatorTest(req, res, dethi.PartIII);
  });
});

/* Part 4*/
router.get('/part4/:id', function (req, res, next) {
  var id = chuyenthanhObjectId(req.params.id);

  partIV_md.findById(id, function (err, dethi) {
    console.log(dethi);
    res.render('dethi/listening/part4', { dethi: dethi });
  })

});
router.post('/part4/:id', function (req, res) {
  var id = chuyenthanhObjectId(req.params.id);
  partIV_md.findById(id, function (err, dethi) {
    caculatorTest(req, res, dethi.PartIV);
  });
});

/* Part 5*/
router.get('/part5/:id', function (req, res, next) {
  var id = chuyenthanhObjectId(req.params.id);

  partV_md.findById(id, function (err, dethi) {
    console.log(dethi);
    res.render('dethi/reading/part5', { dethi: dethi });
  })

});
router.post('/part5/:id', function (req, res) {
  var id = chuyenthanhObjectId(req.params.id);
  partV_md.findById(id, function (err, dethi) {
    caculatorTest(req, res, dethi.PartV);
  });
});


module.exports = router;

