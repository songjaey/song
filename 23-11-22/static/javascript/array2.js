
// let num = [10,20,30,40,50,60];

// // num 배열에 10 단위로 100까지 숫자를 추가로 저장하세요.
// for(var i=7; i<=10; i++){
//   num.push(i*10);
// }

//num배열에 저장된 숫자를 한줄씩 출력하세요;
// for(var i=0; i<num.length; i++){
//   document.write(num[i] + "<br>");
// }

// num 배열에 저장된 숫자들에게  +3을 해주고 결과를 출력하세요.
// for(var j=0; j<num.length; j++){
//   num[j] += 3;
//   document.write(num[j] + " ");
// }

// num 배열에서 55보다 큰 숫자들만 출력하세요

// for( var i = 0; i < num.length; i++ ){
//   if( num[i] >= 55)
//     document.write( num[i] + " " );
// }

// let num1 = [1,2,3];
// let num2 = [4,5,6];

// 두 배열에 같은 인덱스 위치에 있는 숫자들끼리의 합을 출력하시오

// for (var i=0; i<=2; i++){
//   document.write( (num1[i] + num2[i]) + " ");
// }

// num1과 num2 배열에서 짝수에 해당하는 숫자만 num 이라는 배열에 저장하고 출력
// num3 이라는 배열에 저장하고 출력

// let num3 = new Array();
// for (var i=0; i < num1.length; i++){
//   if( num1[i] % 2 == 0 )
//     num3.push( num1[i] );
//   if( num2[i] % 2 == 0)
//     num3.push( num2[i] ); 
// }
// document.write( num3 );

// 과제!!
// 
let name = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"];
let era  = [1.96, 2.45, 2.63, 3.23, 3.6, 3.65, 3.38];
let avg_up = new Array(); var avg = 0, tot = 0;
let avg_up_name = new Array();
// era -> 평균 자책점
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치 이상인 선수들이 누구인지 출력하세요

for(var i=0; i < name.length; i++){
  tot += era[i];  
}
avg = tot / name.length;
for(var i=0; i < name.length; i++){
  if( era[i] > avg )
    avg_up.push( name[i] );
}
document.write("평균은 : " + avg + "<br>");
document.write(avg_up);



