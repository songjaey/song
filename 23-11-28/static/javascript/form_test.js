$(function(){
  $("#allchk").on("click",function(){
    
    let isCheck = $(this).is(":checked");
    // alert(isCheck);
    if(isCheck){
      $(".agree").prop('checked', true);
    }
    else{
      $(".agree").prop('checked', false);
    }
  });

  $(".agree").on("click", function(){
    var chk_count = $(".agree:checked").length;
    var all_check = $(".agree").length;
    if( chk_count == all_check)
      $("#allchk").prop("checked",true); 
    else{
      $("#allchk").prop("checked",false);
      
    }
  });
  $("#pass").on("click", function(){
    var chk_count = $(".agree:checked").length;
    var all_check = $(".agree").length;
    if( chk_count != all_check)
      alert("모두 체크하세요!")
  });
});