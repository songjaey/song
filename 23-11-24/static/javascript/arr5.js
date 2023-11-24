// let arr = [ 
//     [1,2,3,4,5,6,7,8,],
//     [10,20,30,44,55,66,77]
// ];

// for(var i=0; i<arr.length; i++){   // 2번 반복
//   for(var k=0; k<arr[i].length; k++){
//     document.write(arr[i][k]+ " ");
//   }
//   document.write("<br>");
// }

// let people = [
//     ["김유신",45,"군인"],
//     ["이순신",38,"군인"],
//     ["서종우",51,"변호사"],
//     ["김민수",32,"편의점알바"],
//     ["송재영",25,"농심연구원"],
//     ["이민재",29,"한화이글스관람객"]
// ];

// for( var i = 0; i < people.length; i++){
//   {
//     document.write(people[i][0] + " ");
//   }
//   document.write("<br>");
// }

let board = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
let x = 0; y = 0;
// function draw(){
//   alert(board[y][x]); 
//   for(var i=0; i < board.length; i++){
//     for(var k=0; k < board[i].length; k++){
//       if( board[i][k] == 0)
//         $("#box").append("&ensp;&ensp;");
//       if( board[i][k] == 1)
//         $("#box").append("■");
//       if( board[i][k] == 2){
//         $("#box").append("★");
//         x = k; y = i; 
//       }
//     }
//     $("#box").append("<br>");
//   }
// }
// $(function(){
//   draw(); // function draw 실행 - draw함수 실행
// });
// $(document).on("keyup", function(key){
//   // w - 87, a - 65 , s - 83, d - 68
  

//   // if( key.keyCode == 87){
//   //   board[y][x] = 0;
//   //   board[--y][x] = 2;
//   //   $("#box"),html("");
//   //   draw();                      
//   // }
//   $("#box"),html("");
//   draw(); 
// });


function draw(){
  for( var i=0; i< board.length; i++){
      for( var k=0; k< board[i].length; k++){
          if( board[i][k] == 0)
              $("#box").append("&ensp;&ensp;");
          if( board[i][k] == 1)
              $("#box").append("■");
          if( board[i][k] == 2){
              $("#box").append("♥");
              x=k;  y=i;
          }
      }
      $("#box").append("<br>");
  }

}

$(function(){
  draw(); //function draw 실행 - draw함수 실행 
});

$(document).on("keyup",function(key){
  // w - 87 , a - 65, s-83, d-68 
// 직접 만드세요.  
// w,a,s,d 에 대한 동작 구현 ,  검은색 벽을 통과하지 못하게 만들기
  switch( key.keyCode ){
    case 87: // w 누른 경우 위
      board[y][x] = 0;
      board[--y][x] = 2;
      break;
    case 65: // a 누른 경우 왼
      board[y][x] = 0;
      board[y][--x] = 2;
      break;
    case 83:  // s 누른 경우 아래
      board[y][x] = 0;
      board[++y][x] = 2;
      break;
    case 68:  // d 누른 경우 오른
      board[y][x] = 0;
      board[y][++x] = 2;
      break;
    default:  
      alert("w,a,s,d를 방향키로 사용하세요");
  }
  $("#box").html("");
  draw();


  // if( key.keyCode == 87){
  //     board[y][x]=0;
  //     board[--y][x]=2;
  //     $("#box").html("");
  //     draw();
  // }
});