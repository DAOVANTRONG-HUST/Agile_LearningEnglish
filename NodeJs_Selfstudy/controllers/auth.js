var express = require('express'),
    router = express.Router(),
    jwt = require('jwt-simple');

module.exports = function (app) {
    app.use('/auth', router);
};

router.post('/token', function (req, res, next) {
    var username = req.body.username || null,
        password = req.body.password || null;

    if (username !== 'username' || password !== 'password') {
        var error = new Error('Unauthorized');
        error.status = 401;
        return next(error);
    }

    var payload = { id: 'BloBla' };
    var token = jwt.encode(payload, 'day_la_khoa_bi_mat');
    res.json({ token: token });
});