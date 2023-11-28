

$(function(){

  //select선택 값 option 변경하기
  $("#route option").eq(2).prop("selected", true);

  // 전부체크 체크박스에 체크시 전체 체크로 변하게 또는 반대 상황
  $("#all").on("click",function(){
    
    let isCheck = $(this).is(":checked");
    // alert(isCheck);
    if(isCheck){
      $(".ability_list").prop('checked', true);
    }
    else{
      $(".ability_list").prop('checked', false);
    }
  });

  $(".ability_list").on("click", function(){
    var chk_count = $(".ability_list:checked").length;
    var all_check = $(".ability_list").length;
    if( chk_count == all_check)
      $("#all").prop("checked",true); 
    else
      $("#all").prop("checked",false);
  });

  $("#mypw").on("keyup",function(){
      if( $(this).val().length < 6 || $(this).val().length > 12){
          $(".pwvaild").text("비밀번호 6~ 12자 입니다.");
      }else{
          $(".pwvaild").text('비밀번호 안전');
      }
  })

  $("#myphone").on("keyup",function(){

    let num = $(this).val();
    //num = num.replace(/[^0-9]/g,'').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    num = num.replace(/[^0-9]/g,'').
              replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, `$1-$2-$3` ).
              replace(/(\-{1,2})$/g,"");
    $(this).val(num);
    // if( num.length == 4  ){
    //   num = num.slice(0,3) + "-" + num.slice(3);
    //   $(this).val(num);
    // }
    // if( num.length == 9 ){
    //   num = num.slice(0,8) + "-" + num.slice(8);
    //   $(this).val(num);
    // }
  });

  $("#join").on("click",function(){

    //파일 업로드 확장자 검증
    console.log( $("#myface")[0].files[0].name )
    var fname = $("#myface")[0].files[0].name;
    if( !fname.toLowerCase().includes(".png") ){
      alert("png 형식의 이미지만 가능합니다.");
    }
    
    //select 값 가져오기
    var v = $("#route").val(); //$("#route option:selected").val();
    

    //var chk = $(".ability_list").eq(0).is(":checked");
    var len = $(".ability_list:checked").length;
    alert( len );
    var chk = '';    
    $.each( $(".ability_list:checked") , function(){ //체크되어있는 checkbox만 반복문 처리
      chk += $(this).val() + " ";
    });
    alert(chk);

    if( $("#myid").val() == '' ){
       alert("아이디를 입력하세요");
      $("#myid").focus();
    }
    if( $("#mypw").val() != $("#pwre").val() ){
      alert("비밀번호가 같지않습니다.");
      $("#mypw").val('');
      $("#pwre").val('');
      $("#mypw").focus();
    }

  });
});