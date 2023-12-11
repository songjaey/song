$(function(){
    
  make_block(25);
  make_mainImage();
  make_sideImage();
  make_bg();
  
});

function make_block(num){
  
  for(var i=0; i<num; i++){
      var block = document.createElement("div");
      block.className = "item"+i;

      $("#wrap").append(block);

  }
//opener.$("#wrap").html(block);
}

function make_mainImage(){
  var img = document.createElement("img");
  $(".item9").append(img);
  $(".item9 img").attr("src","./static/images/main.avif");
  //img.src = "./static/images/main.jpg";
  //var src = document.getElementsByClass("item9");
}
function make_sideImage(){
  var img = document.createElement("img");
  $(".item0").append(img);
  $(".item0 img").attr("src","./static/images/무인도.jpg");

  var img = document.createElement("img");
  $(".item6").append(img);
  $(".item6 img").attr("src","./static/images/자유여행.png");

  var img = document.createElement("img");
  $(".item18").append(img);
  $(".item18 img").attr("src","./static/images/출발.png");

  var img = document.createElement("img");
  $(".item24").append(img);
  $(".item24 img").attr("src","./static/images/무인도.png");
}

function make_bg(){

  //row1
  $(document).ready(function() {
      $(".item1").append('<div class="row1">서울</div><div class="bg1"></div>');
  });
  $(document).ready(function() {
      $('.item2').append('<div class="row1">대전</div><div class="bg1"></div>');
  });
  $(document).ready(function() {
      $('.item3').append('<div class="row1">광주</div><div class="bg1"></div>');
  });
  $(document).ready(function() {
      $('.item4').append('<div class="row1">대구</div><div class="bg1"></div>');
  });
  $(document).ready(function() {
      $('.item5').append('<div class="row1">부산</div><div class="bg1"></div>');
  });

  //col1
  $(document).ready(function() {
      $(".item7").append('<div class="col1">서울</div><div class="bg2"></div>');
  });
  $(document).ready(function() {
      $('.item10').append('<div class="col1">대전</div><div class="bg2"></div>');
  });
  $(document).ready(function() {
      $('.item12').append('<div class="col1">광주</div><div class="bg2"></div>');
  });
  $(document).ready(function() {
      $('.item14').append('<div class="col1">대구</div><div class="bg2"></div>');
  });
  $(document).ready(function() {
      $('.item16').append('<div class="col1">부산</div><div class="bg2"></div>');
  });

  //row2
  $(document).ready(function() {
      $(".item19").append('<div class="bg3"></div><div class="row2">서울</div>');
  });
  $(document).ready(function() {
      $('.item20').append('<div class="bg3"></div><div class="row2">서울</div>');
  });
  $(document).ready(function() {
      $('.item21').append('<div class="bg3"></div><div class="row2">서울</div>');
  });
  $(document).ready(function() {
      $('.item22').append('<div class="bg3"></div><div class="row2">서울</div>');
  });
  $(document).ready(function() {
      $('.item23').append('<div class="bg3"></div><div class="row2">서울</div>');
  });

  //col2
  $(document).ready(function() {
      $(".item8").append('<div class="bg4"></div><div class="col2">서울</div>');
  });
  $(document).ready(function() {
      $('.item11').append('<div class="bg4"></div><div class="col2">서울</div>');
  });
  $(document).ready(function() {
      $('.item13').append('<div class="bg4"></div><div class="col2">서울</div>');
  });
  $(document).ready(function() {
      $('.item15').append('<div class="bg4"></div><div class="col2">서울</div>');
  });
  $(document).ready(function() {
      $('.item17').append('<div class="bg4"></div><div class="col2">서울</div>');
  });
}