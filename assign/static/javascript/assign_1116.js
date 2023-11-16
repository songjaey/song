//브라우저에 html 태그가 모두 로드(화면표시)되면 실행되는 스크립트 코드
// 3. 주차비 정산
//    apple주차장의 주차요금표
//    기본 주차비 - 1000원, 기본 시간 - 30분
//    ( 30분 이내 주차 시 1000원, 5분 주차해도 1000원 , 39분까지 1000원)
//    10분당 100원씩 추가 ( 40분 주차 시 1100원, 54분 주차시 1200원);
//    2시간 이상 주차시 기본요금 변경
//              기본요금 1500원 ( 2시간 1분 주차 시 )
//    4시간 이상 주차시 기본요금 변경
//                     기본요금 - 2500원
//    8시간 이상 주차시 기본요금 - 무조건 10000원

window.onload = function(){

  var cost = 1000;
  var time = parseInt( prompt("주차시간") );
  var price;
  if(time >= 480){
    cost = 10000;
    price = cost;
  }
  else if(time >= 240){
    cost = 2500;
    price = parseInt( (time - 240) / 10 ) * 100 + cost;
  }
  else if(time >= 120){
    cost  = 1500;
    price = parseInt( (time - 120) / 10 ) * 100 + cost;
  }
  else{
    if(time > 30){
      price = parseInt( (time - 30) / 10 ) * 100 + cost;
    }
    else{
      price = cost;
    }
  }
  alert("결과는 : " + price );

}