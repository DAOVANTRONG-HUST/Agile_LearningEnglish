const express = require('express'); 
const app = express() ; 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup using public and views 
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

mongoose.connect('mongodb+srv://hoangvlbk61:' 
                + process.env.MONGO_ATLAS_PW 
                + '@cluster0-z9rem.mongodb.net/ESS?retryWrites=true', 
                {
                    useNewUrlParser: true,
                })
mongoose.Promise = global.Promise;

// const userRoutes = require('./api/routes/user_model');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')
const indexRoutes = require('./api/routes/index')
const vocabListSettingRoutes = require('./api/routes/vocablistsetting');
const memberManager = require('./api/routes/memberManager');
const testManager = require('./api/routes/testManager');
const vocabManager = require('./api/routes/vocabManager');


// Hỗ trợ cho phần phát triển (OPTIONS = 'dev')
app.use(morgan('dev'));
// Chuyển gói tin body về dạng json để đọc ghi 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Header access through browser 
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS") { 
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); 
        return res.status(200).json({})
    }
    next() ;
})

app.get('/', (req, res, next) => {
    res.redirect('/index');
})

//app use 
app.use('/products', productRoutes); 
app.use('/orders',orderRoutes);
// app.use('/user',userRoutes);
app.use('/index',indexRoutes),
app.use('/thietlapdanhsachhoc',vocabListSettingRoutes);
app.use('/quanlythanhvien', memberManager);
app.use('/quanlytuvung', vocabManager);
app.use('/quanlydethi', testManager);

app.use((req, res, next )=> {
    const error = new Error(' Page not Found') ; 
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



module.exports = app ;