
$(document).ready(function () {
    $(".icon_image").click(function(e){
      // để tránh sự chuyển trang
        e.preventDefault();
        // lấy wỏd mà đã click vào
       var word = e.target.id;
       // truy cập đến thẻ img trong icon_image
       var a = $(this).children("button").children("img") ;
      // truy cập đến thẻ b trong icon_image
       var b = $(this).children("button").children("b") ;
    $.post('/check',{
      // gửi tên chủ đề và từ mà mình đã click lên server
    theme:$('#title').text(), 
    word:word, 
    user: "xxx"
   }
    ,function(data1){ 
        // kiểm tra  src của thẻ img 
            if(a.attr("src") == "/icon/yes.png"){ 
             // nếu giá trị là yes.png thì thay đổi thành no.png và đoạn text thành Forget     
              a.attr("src","/icon/no.png");            
              b.text('Forget');
            }else{
             // nếu giá trị khác no.png thì thay đổi thành yes.png và đoạn text thành Remember
             b.text('Remember');
             a.attr("src","/icon/yes.png");            
             
        } 
    })
  })    
});