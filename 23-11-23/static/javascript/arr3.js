
const store = ["슈펜", "니꼴밀러", "피에르가르뎅","엘칸토", 
               "미쏘", "치크", "뉴발란스", "애슐리", "자연별곡", "코코몽키즈랜드"];
const floor = [1, 1, 1, 4, 3, 5, 2, 7, 8, 10];
const zone  = ["D", "B", "C", "A", "D", "A", "C", "A", "A", "A"];

// stre - 매장명, floor - 층수, zone - 층별 구역

// 매장명을 입력하면 매장의 위치를 출력.

//window.onload = function(){}
$(function(){
  // document.getElementById("store");
  // keydown , keyup, keypress
  $("#store").keyup(function(key){
    if( key.keyCode == 13)
      store_search();
  })
});

function store_search(){
  var brand = $("#store").val(); //

  var idx = store.indexOf(brand);
  if( idx == -1 ){
    $("#result").text("존재하지 않는 브랜드입니다.");
  }
  else{
    var res = `<b>${floor[idx]}</b>층, ${zone[idx]}구역`;
    res += `<h3>${floor[idx]}층 매장</h3>`;

    let same_floor = new Array();
    for(var i = 0; i < store.length; i++){
      if( floor[i] == floor[idx] && i != idx){
        same_floor.push( store[i] );
      }
    }
    res += same_floor;
    $("#result").html(res);
  } 
  // 배열에서 데이터 존재유무 확인
  // for( var i = 0; i < store.length; i++ ){
  //   if( store[i] == brand )
  //     alert("찾았다" +i + "번째 인덱스");
  // }
}