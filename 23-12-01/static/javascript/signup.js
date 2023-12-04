

$(function(){
  $(".join_input>input").on("click",function(){
    $(this).next().css("top","-20px");
  });
  $(".join_input>input").on("blur",function(){
    if( $(this).val().length == 0 )
      $(this).next().css("top","50%");
  });

  $("#bt").on("click",function(){
    if( $("#id").val() == ''){
      alert("아이디를 입력하세요");
      $("#id").focus();
    }
    if( $("#pw").val() == ''){
      alert("패스워드를 입력하세요");
      $("#pw").focus();
    }
    if( $("#pwre").val() == ''){
      alert("패스워드확인을 입력하세요");
      $("#pwre").focus();
    }
    if( $("#email").val() == ''){
      alert("이메일을 입력하세요");
      $("#email").focus();
    }
   
    if( $("#pw").val() != $("#pwre").val()){
      alert("비밀번호가 일치하지 않습니다.");
      $("#pw").val('').focus();
      $("#pwre").val('');
    }
  });

  $("#face").on("change",function(){
    var images = this.files[0];
    var reader = new FileReader();
    reader.onload=function(e){//파일 불러오기 성공시
      $("#select_face").attr("src",e.target.result);
    }
    reader.readAsDataURL(images);
    //console.log(images);
  });

});