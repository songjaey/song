//브라우저에 html 태그가 모두 로드(화면표시)되면 실행되는 스크립트 코드
window.onload = function(){

  // 주사위 게임 만들기
  // 컴퓨터와 주사위 게임을 한다.
  // 각자 주사위 두개씩 던진다. 주사위 합이 큰쪽이 이긴다.

  var user1 = Math.floor( Math.random() * 6 ) + 1;
  var user2 = Math.floor( Math.random() * 6 ) + 1;
  var com1  = Math.floor( Math.random() * 6 ) + 1;
  var com2  = Math.floor( Math.random() * 6 ) + 1;
  var user = user1 + user2; var com = com1 + com2;
  if( user1 == user2 ){
    if( com1 == com2){
      if( user > com ){
        alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
               "승리");
      }
      else if( com > user ){
        alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
               "패배");
      }
      else{
        alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
               "비김");
      }
    }
    else{
      alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
               "승리");
    }
  }
  else{
    if( com1 == com2 ){
      alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
               "패배");
    }
    else{
      if( com > user ){
        alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
        "패배");
      }
      else if( user > com ){
        alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
        "승리");
      }
      else{
        alert("사용자: "+ user1 + " , " + user2 + "컴퓨터: " + com1 + " , " + com2 +
        "비김");
      }
    }
  }
};