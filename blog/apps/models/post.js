var q=require("q");
var db=require("../common/database");

var conn=db.getConnection();


function getAllPosts(){
    var defer=q.defer();
        var query=conn.query('SELECT * FROM posts',function(error,posts){
            if(error){
                defer.reject(error);
            }else{
                defer.resolve(posts);
            }
        });
    return defer.promise;
}


function addPost(params){
    if(params){
        var defer=q.defer();
        var query = conn.query('INSERT INTO posts SET ?', params, function (error, results, fields) {
            if(error){
                defer.reject(error);
            }else{
                defer.resolve(results);
            }

        });
        return defer.promise;
            
    }
    return false;
}

function getPostByID(id){
    if(id){
        var defer=q.defer();
        var query=conn.query('SELECT * FROM posts WHERE id=?',id,function(error,posts){
            if(error){
                defer.reject(error);
            }else{
                defer.resolve(posts);
            }
        });
        return defer.promise;

    }
    return false;
}

function updatePost(params){
    if(params){
        var defer=q.defer();
        var query=conn.query('UPDATE posts SET title= ?, content= ? ,author= ? ,updated_at=? WHERE id=?',[params.titile,params.content,params.author,new Date(),params.id],function(error,posts){
            if(error){
                defer.reject(error);
            }else{
                defer.resolve(posts);
            }
        });
        return defer.promise;
        

    }
    return false;
}


function deletePost(id){
    if(id){
        var defer=q.defer();
        var query=conn.query('DELETE * FROM posts WHERE id=?',id,function(error,posts){
            if(error){
                defer.reject(error);
            }else{
                defer.resolve(posts);
            }
        });
        return defer.promise;

    }
    return false;
}
module.exports={
    getAllPosts:getAllPosts,
    addPost:addPost,
    getPostByID:getPostByID,
    updatePost:updatePost,
    deletePost:deletePost
}