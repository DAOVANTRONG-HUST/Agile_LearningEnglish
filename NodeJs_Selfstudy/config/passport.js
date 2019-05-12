var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var passport = require('passport'),
    passportJWT = require('passport-jwt'),
// load up the user model
var User = require('../models/User');
var db = require('./database'); // get db config file

// module.exports = function (passport) {
//     var opts = {};
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//     opts.secretOrKey = db.secret;
//     passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
//         User.findOne({ id: jwt_payload.id }, function (err, user) {
//             if (err) {
//                 return done(err, false);
//             }
//             if (user) {
//                 done(null, user);
//             } else {
//                 done(null, false);
//             }
//         });
//     }));
// };

var opts = {
    secretOrKey: db.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

var jwtStrategy = new JwtStrategy(opts, function (payload, done) {
    User.findOne({ id: payload.id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use('jwt', jwtStrategy);

module.exports.isJwtAuthenticated = passport.authenticate('jwt', { session: false });