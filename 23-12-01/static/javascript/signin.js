
let mid=["abc","good","niceguy","skyblue123","tty","sjy11","kingpack","jocker"];
let mpw=["12345678", "good1234","nice1234","skyb1234","tty12345","songjaey1","kingpack1","jocker12"]
$(function(){
  $("#signBt").on("click", function(){

    if( $("#id").val() == ''){
      alert("아이디를 입력하세요");
      $("#id").focus();
    }
    else if( $("#pw").val() == ''){
      alert("비밀번호 입력하세요");
      $("#pw").focus();
    }
    else{

      var idx = mid.indexOf($("#id").val());
      if(idx == -1){
        var ok = confirm("아이디가 존재하지 않습니다.\n회원가입하시겠습니까?");
        if(ok) location.href="signup.html";
      }
      else if(mpw[idx] == $("#pw").val() ){
        alert("로그인성공");
      }  
      else{
        alert("비밀번호가 일치하지 않습니다");
        $("#pw").val("").focus();
      }
      // for( var tmp in mid){
      //   if(mid[tmp] == $("#id").val()){
      //     if(mpw[tmp] == $("#pw").val()){
      //       alert("로그인 성공");
      //       break;
      //     }
      //     else{
      //       alert("비밀번호가 일치하지않습니다");
      //     }
      //   }
      // }
    }

    //로그인 시도가 된다면
    if( $("#id").val !="abc"){

    }
    else if( $("#id").val != '' && $("pw").val !='' ){
      alert("아이디 또는 비밀번호가 올바르지 않습니다");
      $("#id").val("").focus();
      $("#pw").val("");
    }

  });
});