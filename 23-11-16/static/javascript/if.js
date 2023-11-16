// if문 - 조건식의 참, 거짓에 의해 내용을 실행 시킨다.
/* if( 조건식 ){
  참일 경우 실행할 내용
}
if 뒤에 작은 괄호 열어서 안에 조건식을 작성한다. 조건식 뒤에는 중괄호를 열어서
안에 참일 경우 실행할 내용을 작성한다.
*/


// var num = 20;
// if( num > 0 ){
//   console.log("양수다");
// }
// else{
//   console.log("음수다");
// }

// var birth = parseInt( prompt("생년월일(8자리) 입력") );
// var age   = birth;
// if ( birth <= 20041231 ){
//   console.log("성인이다");
// }
// else{
//   console.log("미성년자");
// }

// var kor  = parseInt( prompt("국어 ") );
// var eng  = parseInt( prompt("영어 ") );
// var math = parseInt( prompt("수학 ") );
// var avg  = ( kor + eng + math ) / 3;
// if( avg >= 65 ){
//   console.log("통과");
// }
// else
// {
//   console.log("낙제");
// }

// 동전 앞면 뒷면 맞추기
// css 선택자 id -> #, class -> .

// 브라우저에 html태그가 모두 로딩(화면표시)되면 자바스크립트 코드를 실행시키는 방법

com   = Math.floor( Math.random() * 3 ) + 1;
window.onload = function(){
  // 가위 바위 보 게임 만들기
  // 1. 가위 2. 바위 3. 보
  var com   = Math.floor( Math.random() * 3 ) + 1;
  var scis  = document.getElementById("scissors");
  var rock  = document.getElementById("rock");
  var paper = document.getElementById("paper");
  
  scis.addEventListener("click", function(){
    if( com == 1 ){
      alert("비김");
    }
    else if( com == 3){
      alert("이김");
    }
    else{
      alert("패배");
    }
    com  = Math.floor( Math.random() * 3 ) + 1;
    scis.style.background = "black"; 
    rock.style.background = "white";
    paper.style.background = "white";
  });
  rock.addEventListener("click", function(){
    if( com == 2 ){
      alert("비김");
    }
    else if(com == 1){
      alert("이김");
    }
    else{
      alert("패배");
    }
    com   = Math.floor( Math.random() * 3 ) + 1;
    scis.style.background = "white"; 
    rock.style.background = "black";
    paper.style.background = "white";
  });
  paper.addEventListener("click", function(){
    if( com == 3 ){
      alert("비김");
    }
    else if(com == 2){
      alert("이김");
    }
    else{
      alert("패배");
    }
    com   = Math.floor( Math.random() * 3 ) + 1;
    scis.style.background = "white"; 
    rock.style.background = "white";
    paper.style.background = "black";
  });
  // var com  = parseInt( Math.random() * 3 ) + 1;
  // var res  = use1 - com 
  // // 1 - 3 , 2 - 1, 3-2 -> 이김
  // // 1 - 2 , 2 - 1, 3-1 -> 짐
  // if ( res == 0 ){
  //   alert("유저" + use1 + " 컴" + com + "비김");
  // }
  // else if( res == 1 || res == -2){
  //   alert("유저" + use1 + " 컴" + com + " 이김");
  // }
  // else{
  //   alert("유저" + use1 + " 컴" + com + " 패배");
  // }

  // var num1 = parseInt( prompt("정수1") ); 
  // var num2 = parseInt( prompt("정수2") );
  // var num3 = parseInt( prompt("정수3") );

  // if ( num1 == num2 && num1 == num3 ){
  //   alert("모두 같은 수");
  // }
  // else if( num1 < num2 && num1 < num3 ){
  //   alert("작은 수 :" + num1);
  // }
  // else if( num2 < num1 && num2 < num3 ){
  //   alert("작은 수 :" + num2);
  // }
  // else if( num3 < num1 && num3 < num2 ){
  //   alert("작은 수 :" + num3);
  // }
  // else{
  //   alert("오류");
  // }
  // if( num1 < num2 ){
  //   if( num1 < num3){
  //     alert("작은수 : " + num1);
  //   }
  //   else{
  //     alert("작은수 : " + num3);
  //   }
  // }
  // else if( num2 < num3 ){
  //   alert("작은수 : " + num2);
  // }
  // else{
  //   alert("작은수 : " + num3);
  // }



  // var coin = Math.floor( Math.random() * 2 ) + 1;
  // // javascript에서는 html태그 선택방법
  //  var front = document.getElementById("front");
  //  var back  = document.getElementById("back" );

  // front.addEventListener("click", function(){
  //   if ( coin == 1 ){
  //     alert("정답");
  //   }
  //   else{
  //     alert("틀림");
  //   }
  //   //alert(" 앞면 선택"); // alert는 알림창을 나타내는 함수이다.
  // })
  // back.addEventListener("click", function(){
  //   if ( coin == 2 ){
  //     alert("정답");
  //   }
  //   else{
  //     alert("틀림");
  //   }
  //   //alert(" 뒷면 선택");
  }



