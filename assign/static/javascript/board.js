// board.js

// const zone_name=[
//   "복지기금","화성","성남","창원","제주","용인","수원","울산",
//   "인천공항","청주","광주","부천","대구","남양주","인천","포항",
//   "복지기금납부","천안","부산","전주","서울","안산","대전",
//   "무인도","안양","김해","평택","시흥","파주","의정부","김포","출발"
// ];
// const zone_color=["#FF2424","#53C14B","#FFBB00","#121212"]; // 각 면의 색상
// const land_purchase=[  // 각 도시의 매입 가격 ( 만단위)
//   0, 25, 27, 26, 34, 28, 27, 39,
//   0, 16, 42, 20, 45, 19, 48, 27, 
//   0, 21, 52, 20, 80, 22, 120,
//   0, 12, 10, 15, 12, 9, 9, 7, 0

// ];

// const bg_image= [ // 모서리구역의 배경이미지
//   "출발.jpg", "무인도.jpg","복지기금.jpg","인천공항.jpg"
// ];

// 각 구역의 객체 생성자 함수
//  구역 이름, 토지매입가격, 소유자, 색상, 기능(모서리부분), 이미지
function zone_Object( name, purchase, owner, color, func, image){
  this.name=name;
  this.purchase=purchase;
  this.owner=owner;
  this.color=color;
  this.func=func;
  this.back=image;
}

//플레이어 생성자 함수
function player(num, color){
  this.num=num;
  this.color=color;
  this.money=100; // 초기 게임머니 100만원
  this.zone=new Array(); // 매입 한 토지를 배열로 저장
  this.drift_turn=0; // 무인도 남은 턴
  this.location=0;// 현재위치
}

// 전역변수
let fund = 0; // 사회복지기금 모금 금액 저장 변수
let island_ = new Array(); // 무인도에 도착한 플레이어
let zone = new Array();//각 구역의 객체 저장 배열
let player_list = new Array();// 게임 참가자

// 함수정의
function zone_create(){
  for( var i=0; i< zone_name.length; i++){
      var color = zone_color[0];
      if( i>=0 & i<=7)
          color = zone_color[2];
      if( (i>=8 & i<=23) & i%2==0 )
          color = zone_color[3];
      if( (i>=8 & i<=23) & i%2==1 )
          color = zone_color[1];

      var image = "";
      if( i == 0) image = bg_image[2];
      if( i== 8) image = bg_image[3];
      if( i== 23) image = bg_image[1];
      if( i== 31) image=bg_image[0];



     zone.push( new zone_Object(
      zone_name[i] , land_purchase[i], "", color, "", image
     )  );
  }
}

// 구역객체들을  zone 클래스 div에 적용하기
function zone_draw(){
  $.each( zone, function( idx, obj){
      if(idx == 0 || idx==8 || idx==23 || idx==31){
          $(".zone").eq(idx).css("background-image","url(./static/images/"+obj.back+")");
          $(".zone").eq(idx).css("background-size","cover");
          $(".zone").eq(idx).css("background-position","center");
      }else{
          $(".zone").eq(idx).children(".zone_name").text( obj.name);
          $(".zone").eq(idx).children(".zone_color").css("background-color",obj.color);
      }

      $(".zone").eq(idx).attr("data-num",obj.num);
  });
}
function game_init(){
  var pc = Number( $("#player_number").val() );

  $("#game_state").html("<h3>게임현황</h3>");
  var pcolor=["#ff000", "#00ff00","#000ff","#ffbb00","#ffb2f5"]
  for(var i=1; i<=pc; i++){
      player_list.push( new player( i, pcolor[i-1] ) );
      $("#game_state").append(
          `<div class='ps'>
              <b class='pnum'>${i}</b>
              <input type='color' id='pcl${i}' value='${player_list[i-1].color}'>
              <div class='steate'>
                  자금 : <b id='pm${i}'>${player_list[i-1].money}만원</b>
                  보유도시 : <b id='pcity${i}'>${player_list[i-1].zone.length}개</b>
              </div>
          </div>`
      );    
  }
  $("input[type=color]").on("change", change_pcl );
  $("#game_state").show();
  $("#set_player").hide();

  // 게임 플레이어수에 맞는 말 만들기
  // svg -scalable vector graphics (수학공식을 통해 이미지를 저장,표시)
  // <i class="fa-solid fa-jet-fighter"></i>
  
  for(var i=0; i<player_list.length; i++){
      var gamer = player_list[i];
      var zone_location = find_location( gamer.location );
      var tag=`
          <div class='meeple m${gamer.num}' data-pn='${gamer.num}'
          style='color:${gamer.color};  '>
              <i class="fa-solid fa-jet-fighter"></i>
          </div>
      `;
      $(".zone").eq(zone_location).append(tag);

      overlap(zone_location);
  }

  create_dice(); //주사위 생성
}

function create_dice(){ // 화면에 주사위 나타내기
  var dice =`
          <div id='dice_wrap'>
            <div class='dice'>
              <div class='diceImg'>
                <img id='dice1' src='./static/images/dice1.png'>
              </div>
              <div class='diceImg'>
                <img id='dice2' src='./static/images/dice4.png'>
              </div>
            </div>
            <div class='dicebt'>
              <button onclick='rolling(this)'>굴리기</button>
            </div>
          </div>
          `;
  $(".center").append(dice);
}

function overlap(location){
  var len = $(".zone").eq(location).children(".meeple").length;
  if( len >= 2){
    var left=50, top=50;
    for(var i=1; i<len; i++){
      $(".zone").eq(location).children(".meeple").eq(i).css("left",(left+i*5)+"%");
      $(".zone").eq(location).children(".meeple").eq(i).css("top",(left+i*5)+"%");
    }
  }
}
//<i class="fa-brands fa-google"></i>
function find_location(n){
  var index=0;
  $(".zone").each(function(idx,item){
    var num = Number( $(item).data("num") );
    if(num == n){
      index=idx; 
      return;
    }
  });
  return index;
}
function change_pcl(){
  var new_color=$(this).val();
  var num = Number($(this).attr("id").substring(3) );
  var game = player_list[num-1];

  game.color = new_color;
  // 자신의 말 찾기, num변수에는 플레이어의 번호가 저장되어있다.
  for(var i=0; i<$(".meeple").length; i++){
    if( $(".meeple").eq(i).data("pn") == num ){
      $(".meeple").eq(i).css("color", new_color);
      break;
    }
  }

}
$(function(){
  //zone_create();

  $.getJSON("./data/city.json",function(data){
    zone = data;
    zone_draw();
    func_link();
  });


  // var xmlHttp = new XMLHttpRequest();
  // xmlHttp.onload = function(){
  // var city = JSON.parse(this.responseText);
  //   for( var i=0; i< 32; i++){
  //       //console.log(city);
  //       zone.push( new zone_Object(
  //       city[i].name , city[i].purchase, "", city[i].color, "", city[i].back
  //     ) );
  //     zone_draw();
  //   }
    
  // }
  // xmlHttp.open("GET","./data/city.json");
  // xmlHttp.send();

  

  $("#enroll").on("click", game_init );
  $("#player_number").on("change", function(){
      $(this).next().text( $(this).val() + "명");
  } );
  $("#player_number + label").text(2+"명");
  //$("input[type=color]").on("change", change_pcl );
 
});
 //16 24 28 8 0
function func_link(){
  zone[0].func=welfare;
  zone[8].func=airport;
  zone[16].func=fundpayment;
  zone[23].func=island;
  zone[31].func=complete;
}
function welfare(gamer){
  alert("복지기금 납부");
  gamer.money += fund;
  fund=0;
  $("#pm"+gamer.num).text(gamer.money+"만원");
}
function airport(gamer){//플레이어가 원하는 곳으로 이동

}
function fundpayment(gamer){
  gamer.money -= fund;
  fund += 20;
  $("#pm"+gamer.num).text(gamer.money+"만원");
}
function island(gamer){ //3턴 동안 탈출 불가

}
function complete(gamer){

}

// function player(num, color){
//   this.num=num;
//   this.color=color;
//   this.money=100; // 초기 게임머니 100만원
//   this.zone=new Array(); // 매입 한 토지를 배열로 저장
//   this.drift_turn=0; // 무인도 남은 턴
//   this.location=0;// 현재위치
// }