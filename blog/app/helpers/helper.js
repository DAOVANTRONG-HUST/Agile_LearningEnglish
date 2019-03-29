var bcrypt=require("bcrypt");
var config=require("config");
var q = require("q");

function hash_password(password){
    var saltRounds=config.get("salt");

    var salt=bcrypt.genSaltSync(saltRounds);
    var hash=bcrypt.hashSync(password,salt);

    return hash;
}

function compare_password(password,hash){

    return bcrypt.compareSync(password, hash); // true
    // if(password === hash){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}
// "0" == 0

// => ToNumber("0") === 0

module.exports = {
    hash_password:hash_password,
    compare_password:compare_password,
    //compare: compare
}