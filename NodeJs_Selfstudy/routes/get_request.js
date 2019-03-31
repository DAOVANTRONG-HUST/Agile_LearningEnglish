var express = require('express');
var config = require('../config/database');
var MongoClient = require('mongodb').MongoClient;

var get_request = express.Router();

get_request.get('/thietlapdanhsachhoc', (req, res) => {
    res.render('thietlapdanhsachhoc')
})
get_request.get('/index', (req, res) => {
    res.render('index')
})
get_request.get('/kiemtratongthe', (req, res) => {
    res.render('kiemtratongthe')
})
get_request.get('/kiemtratuvung', (req, res) => {
    res.render('kiemtratuvung')
})
get_request.get('/profile', (req, res) => {
    res.render('profile')
})
get_request.get('/forum', (req, res) => {
    res.render('forum')
})
get_request.get('/diemdanh', (req, res) => {
    res.render('diemdanh')
})
get_request.get('/login', (req, res) => {
    res.render('login')
})

// admin page 
// Mange the users
get_request.get('/quanlythanhvien', (req, res) => {
    res.render('quanlythanhvien')
})
get_request.get('/themmoithanhvien', (req, res) => {
    res.render('themmoithanhvien')
})
get_request.get('/quanlythanhvien/thanhvien', (req, res) => {
    res.render('thanhvien')
})
// Manage the test 
get_request.get('/quanlydethi', (req, res) => {
    res.render('quanlydethi')
})
get_request.get('/themmoidethi', (req, res) => {
    res.render('themmoidethi')
})
get_request.get('/quanlydethi/dethi', (req, res) => {
    res.render('dethi')
})
// Manage the Vocab
get_request.get('/quanlytuvung', (req, res) => {
    res.render('quanlytuvung')
})
get_request.get('/themmoituvung', (req, res) => {
    res.render('themmoituvung')
})
get_request.get('/quanlytuvung/tuvung', (req, res) => {
    res.render('tuvung')
})
get_request.get('/', (req , res) => {
    res.redirect('/index');
})
module.exports = get_request;