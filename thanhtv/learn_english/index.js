// khai báo thư viện và thiết lập server
 var express = require('express');
var app = express();
//goi module lay du lieu Post
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
//doi html thanh ejs
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
//cau hinh de use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
var url ="mongodb://127.0.0.1:27017";
// xử lí khi click vào bất kì chủ đề nào trên giao diện trang chủ

//username là tên người dùng
var username = "xxx";
app.get('/listTheme/:id',(req,res)=>{
    // lấy tên chủ đề được click
    var theme = req.params.id;
    // truy cập database để tìm chủ đề 
    var check = [];
     mongoClient.connect(url,(err,db)=>{
         if(err) throw err;
         var dbo = db.db('englishWebsite');
        
        var element = {chude:theme};
        dbo.collection('words').findOne(element,function(err,re){
            if(!re){
                console.log("no exist");
            }
            if(err) throw err;
            re.word.forEach(e => {
                //console.log(e);
            if(e.userlist.indexOf(username)>-1){
                check.push(1);
            }else{
                check.push(0);
            }
           });
           console.log(check);
            // tìm được chủ đề và trả về dữ liệu tìm được trong database
            res.render('listWord',{data:re, check: check});
            db.close();
     })
})
})
// xử lí khi nhấn vào forget or remember
app.post("/check",(req,res)=>{
    // lấy chủ để và từ mà client gửi lên
    var theme = req.body.theme;
    var word = req.body.word;
    var user = req.bode.user;
    theme = theme.trim();
        //truy cập database và tim từ nhận được từ client
    mongoClient.connect(url,(err,db)=>{
       
        if(err) throw err;
        var dbo = db.db('englishWebsite');
        var element ={chude:theme};
        console.log(element);
            dbo.collection('words').findOne(element,function(err,resul){
                if(err) throw err;
                var result = resul;
                for(var i=0; i< result.word.length; i++){
                    // tìm từ , tìm thấy thì dừng vòng lặp
                    if(result.word[i].name == word){
                        // nếu tìm được từ thì cập nhật biến check 
                        // if(result.word[i].check == 0){
                        //     result.word[i].check = 1;
                        // }else{
                        //     result.word[i].check = 0
                        // }
                        if(result.word[i].userlist.indexOf(user)>-1){
                            //Xóa user trong mảng
                            var array = result.word[i].userlist;
                            array.splice(result.word[i].userlist.indexOf(user), 1);
                            var where = {"word": {"name" : word}};
                        }else{
                            //Thêm user trong mảng

                        }
                        break;
                    }
                }
                var updateArray = result.word;
                // cập nhật lại database    
                var query ={$set:{word: updateArray}}
                var value = {chude:theme,name:word};
                console.log(value)
                dbo.collection('words').updateOne({chude: theme},query,(function(err,re){
                    if(err) throw err;
                    console.log("update successfully");
                    db.close();
                }))
                // gửi giao diện kèm theo dữ liệu gửi về
                res.render("listWord",{data:result, check: 2});
                db.close();
            })
    })
})