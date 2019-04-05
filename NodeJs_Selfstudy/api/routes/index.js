const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

router.get('/', (req, res, next) => {
    const fakeinfo = "Thong tin de tam cho no co thoi chu k co tac dung gi nhieu :)) ";
    res.render('index',{ fakeinfo: fakeinfo});
})

module.exports = router;