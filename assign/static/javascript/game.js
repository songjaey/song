//game.js

const dice_img=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
let turn=1;
let dice1=[0,0];
let dice2=[0,0];

function rolling(obj){
  $(obj).text("멈춰!");
  $(obj).attr("onclick","stop(this)");
  //
  var setTime = 100; 
  dice1[0] = setInterval( function(){
    dice1[1] = Math.floor(Math.random()*6);
    $("#dice1").attr("src","./static/images/"+dice_img[dice1[1]]);
    
  } ,setTime);

  dice2[0] = setInterval( function(){
    dice2[1] = Math.floor(Math.random()*6);
    $("#dice2").attr("src","./static/images/"+dice_img[dice2[1]]);
    
  } ,setTime);
}

function stop(obj){
  $(obj).text("굴리기");
  $(obj).attr("onclick","rolling(this)");
  clearInterval(dice1[0]);
  clearInterval(dice2[0]);

  meeple_move();
}
function meeple_move(){
  var gamer = player_list[turn-1]
  var dice_sum = dice1[1] + dice2[1] + 2;
  var old_location = gamer.location;
  
  if( gamer.location + dice_sum > 31){
    var diff = (gamer.location+dice_sum) - 31;
    gamer.location = diff - 1;
  } 
  else{
    gamer.location = gamer.location + dice_sum;
  }
  //
  var old_zone = find_location(old_location);
  $(".zone").eq(old_zone).children(".m"+turn).remove();


  var zone_location = find_location(gamer.location);
  var tag=`
          <div class='meeple m${gamer.num}' data-pn='${gamer.num}'
          style='color:${gamer.color};  '>
              <i class="fa-solid fa-jet-fighter"></i>
          </div>
      `;
  $(".zone").eq(zone_location).append(tag); 
  
  overlap(zone_location);
  // 이동한 위치에 땅에서 할 일
  game_todo(zone_location);
  
  //
  if(turn == player_list.length)
    turn = 1;
  else
    turn++;
}

function game_todo( location ){
  var city = zone[location];
  var gamer = player_list[turn-1]

  if(city.purchase == 0){
    //16 24 28 8 0
    city.func(gamer);
  }
  else if( city.owner == ''){
    if( confirm(`${city.name}의 매입가는 
    ${city.purchase}만원입니다. \n매입 하시겠습니까?`) ){ 
       city.owner = turn;
       gamer.money -= city.purchase;
       $("#pm"+turn).text(gamer.money+"만원"); 
       $(".zone").eq(location).children(".zone_name").css("background",gamer.color);
    }
  }
  else{
    var owner = city.owner;
    var tollfee = city.purchase;
    gamer.money -= tollfee;
    player_list[owner-1].money += tollfee; 

    $("#pm"+owner).text(player_list[owner-1].money+"만원");
    $("#pm"+turn).text(gamer.money+"만원");
    alert(`${city.name} 소유주에게 ${tollfee}만원 지불했습니다.`);
  }
}