let color=""; //선택한 색 저장
$(function(){
  $("#apply").on("click",paint );
  
  $.each($(".color") , function(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    // alert(r);
    // alert(g);
    // alert(b);

    $(this).css("background", "rgb("+r+","+g+","+b+")");
  });

  $(".color").on("click",selectColor);
});
function selectColor(){
  var div = $(this);
  color = div.css("background-color");
  //alert(color);
  //내가 클릭한 색상 div에 빨간색 3px 테두리 씌우기
  //다른 색을 클릭하면 현재 클릭한 div에만 테두리 표시하기
  $(".color").css("border", "none");
  $(this).css("border","3px solid red")
}

function paint(){
  //부모창의 table 배경색으로 내가 선택한 색이 적용되게 하기
  opener.$("#draw>table").css("background",color);
  window.close();
}