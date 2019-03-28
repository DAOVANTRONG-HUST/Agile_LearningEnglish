var bcrypt  = require("bcrypt");
var config = require("config");
function hash_passwork(password){
    var saltRounds = config.get("salt");

    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}
module.exports = {
    hash_passwork: hash_passwork
}