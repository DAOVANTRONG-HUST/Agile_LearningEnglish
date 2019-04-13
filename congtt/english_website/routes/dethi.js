var express = require('express');
var router = express.Router();
var dethi=require("../dbs/dethi.json")

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('dethi/listening01',{dethi:dethi});

});

router.post('/submit', function (req, res) {
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
  
  })

module.exports=router;

