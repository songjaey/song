let name  = ["하지원", "전지현", "남기현", "이다희", "이가림","김정환"];

let score = [ // [국어, 수학, 영어, 총점, 평균]
  [78,87,54,219,73],
  [80,70,60,210,70],
  [88,99,65,252,84],
  [94,34,87,215,71],
  [10,20,30,60,20],
  [1,2,3,6,2]
];

$(function(){

});
var idx = 0;
function search(){
  var input_name = $("#name").val();
  idx = name.indexOf(input_name);
  if(idx == -1)
    $("#result").html("등록되지 않은 학생입니다");
  else
    $("#result").html("국어:"+score[idx][0]+" 수학:"+score[idx][1]+" 영어:"+score[idx][2]+" 평균"+score[idx][4]);
}

function over(){
  var sum = 0 , j = 4;
  var check = true;
  let res = new Array();
  // for(var i = 0; i <= 5; i++){
  //   sum += score[i][j];
  // }
  // var avg = sum / name.length;
  var avg = $("#avg").val();
  $("#result").html(avg);
  for(var i=0; i < 6; i++){
    if( score[i][j] >= avg){
      res.push(name[i]+",");
      check = false;
    }
  }
  if(check)
    res.push("조건에 맞는 학생이 없습니다.");

  $("#result").html(res);
}