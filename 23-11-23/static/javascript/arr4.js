const movie_name = ["서울의봄","프레디의피자가게","사채소년",
                    "헝거게임", "더와일드", "더마블스", "30일","나폴레옹", "빅슬립"];
const grade  = [8.7, 7.3, 7.3, 6.7, 8.2, 3.9, 6.9, 9.6, 9.0]
const nation = ["한국","미국","한국","미국","미국","미국","한국",
                "영국","한국"];




// 영화 제목을 검색하여 평점(grade)와 국가(nation)을 출력하세요.
$(function(){
  // document.getElementById("store");
  // keydown , keyup, keypress
  $("#movieName").keyup(function(key){
    if( key.keyCode == 13)
      search();
  })
});
function search(){
  let name = ($("#movieName").val().replace(/\s/g,""));
  var idx  = movie_name.indexOf(name);
  var res  = ""; 
  if(idx == -1){
    $("#result").text("존재하지 않는 영화입니다.");
  }
  else{
    res = `평점: ${grade[idx]} , 국가: ${nation[idx]}`;
    $("#result").html(res);
  }
  //$("result").html("나오냐");
}


