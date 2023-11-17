// /*



//   /^010-?([0-9]{4})-?([0-9]{4})$/
// */

// word = "나는 20살입니다. \n전화번호는 010-1234-1234 입니다."
// // console.log("원본 : " + word);
// // console.log( word.replace(/\-/g, '') );
// // console.log( word.replace(/\./g, '') );
// // console.log( word.replace(/\s/g, '') );
// // console.log( word.replace(/..살/g,'45살'));

// // // 전화번호에서 1234-1234 부분을 xxxx-1234로 변경;
// // console.log( word.replace(/[0-9]{4}/,'xxxx'))

// var tmoney = "10,200원";
// // var money  = tmoney.replace(/\,/g,"").replace(/원$/,"");
// var money  = tmoney.replace(/[^0-9]/g,"");
// console.log( money );


// //문자열 나누기 -> split()
// word = "이순신,강감찬,김유신,장보고,최무선,장영실";
// const name = word.split(","); // , 기준으로 분리
// console.log(name[1]);
// word = "nice123@naver.com";
// var id = word.split("@")[0];
// console.log(id);

// // 7. 문자열 추출 - substring()
// console.log( word.substring( 0 , 7 ) ); // 0번째 부터 7번 이전까지 추출
// console.log( word.substring(4) ); // 4번부터 끝까지 추출
// console.log( word.substring(0, word.indexOf("@") ) );
// var birth = "19971209"

// // 생년월일 중에서 몇 월 생인지 출력
// console.log( birth.substring( 4, 6 ) );

// // 8. 문자열 추출 2 - slice() : 음수값도 사용할 수 있다.
// word = "자바스크립트 너무 좋아!"
// console.log( word.slice(2,7) );
// console.log( word.slice(-3));
// console.log( word.slice(-3,-2));

// var text = "강동욱 105,000원-남기현 345,200원-서종우 10,000원-송재영 4,343,290원";
// // 문제!
// // 남기현이 보유한 현금은 얼마인가?
// // 강동욱이 보유한 현금에 서종우의 돈을 빼면 얼마인가??
// // 송재영의 돈을 434,329원으로 변경하시오.

// //1
// const text1  = text.split("-");
// var nam    = text1[1].substring(4);
// console.log(nam);
// //2
// var kang   = (text1[0].substring(4).replace(/원$/,"").replace(/\,/g,""));
// var seo    = (text1[2].substring(4).replace(/원$/,"").replace(/\,/g,""));
// console.log( Math.floor(kang)-Math.floor(seo));
// //3

// const member = text.split("-");
// let song   = member[3].replace("4,343,290","434,329");



// // 9 소문자, 대문자 변경 - toLowerCase() , toUpperCase()
// word = "  i Love School";
// console.log( word.toLowerCase() );
// console.log( word.toUpperCase() );

// // 10. 공백제거 - trim() - 문자열의 양쪽 끝 공백 제거
// console.log("공백제거전: " + word);
// console.log("공백제거후: " + word.trim());

// // 11. 문자열 반복 - repeat()
// word = "apple";
// console.log( word.repeat(3) );

// // 12. 문자열 위치 정렬 또는 채우기 - padStart(), padEnd()
// console.log( word.padStart(10,"r") );
// console.log( word.padEnd(10,"r") );

// // 13. 문자열에 특정 문자열 포함 여부(참, 거짓) - includes()
// word = "이순신, 장보고, 강감찬, 최영, 정도전, 정약용, 양만춘";
// if( word.includes("정도전")){
//   console.log("회원입니다.");
// }
// else{
//   console.log("회원이 아닙니다.");
// }

// // 14. 문자열에 특정 문자나 문자열로 시작하냐? - startsWith(), endsWith()
// var info = "이름 : 이순신, 직업 : 군인"
// if( info.startsWith("이름") ){
//   console.log("올바른 형식의 데이터입니다");
// }
// else{
//   console.log("잘못된 데이터입니다.");
// }

// // 15. 문자열로 변환 - toString(
// var num = 100;
// console.log( typeof num.toString() );

// var birth = 19990101;
// // birth/10000
// var year = parseInt( birth.toString().substring(0,4) );
// console.log(year);

// /*
//   .length    - 문자열의 길이 (문자열 개수)
//   .charAt(숫자)  - 지정한 번호 위치의 문자 추출
//   .indexOf(문자열) - 문자열에서 특정문자 또는 문자열이 몇 번째 있는지 알려준다. 없으면 -1
//   .lastIndexOf( 문자열) - 문자열의 끝에서 문자 또는 문자열 몇 번째 있는지 검색
//   .include(문자열) - 문자열에 특정 문자 또는 문자열의 존재여부(true, false)
//   .replace(원본문자열, 변환문자열) - 문자열에서 특정 문자 또는 문자열을 지정한 문자 또는 문자열로 변환
//   .split(문자열) - 문자열을 특정 문자열을 기준으로 분리한다. (배열이라는 구조로 저장)
//   .substring(시작번호, 끝번호), .substring(시작번호)
//       - 문자열에서 지정된 위치의 문자열을 추출
//   .slice(시작번호, 끝번호), .slice(시작번호, 끝번호)
//       - 문자열에서 지정된 위치의 문자열을 추출, 음수 사용 시 뒤에서부터 추출
//   .toLowerCase(), toUpperCase() - 소문자 , 대문자로 변환
//   .padStart(), . padEnd() - 자릿수지정과 정렬 및 채우기
//   .trim() - 문자열의 양쪽 끝 공백 제거
//   .startsWith(), endsWith() - 문자열의 시작과 끝이 특정 문자열로 시작하는지 여부
//   .toString - 문자열로 변환
//   .repeat(숫자) - 지정한 숫자만큼 반복 출력된다.
// */

// // 학이 침을 뱉으면 - 퇴학
// // 닭이 작은 사이즈 

// //


let info = "이순신: 군인,34세,아산 - 장보고:군인,41세,완도 - 김춘추:정치인,28세,경주";
let data = info.split(" - ");
// 출력 - 이름 직업
var lee_name = data[0].substring(0,data[0].indexOf(":"));// data[0].split(":");
var lee_job  = data[0].substring(data[0].indexOf(":") + 1, data[0].indexOf(","));
lee_name = data[0].split(":")
console.log(lee_name[0]);

// 장보고의 나이는 몇인가? 출력
var jang_age = data[1].substring(data[1].indexOf(",") + 1,data[1].indexOf("세"));
var jang   = data[1].split(":");
var jang_t = jang[1].split(",");

console.log( parseInt( jang_t[1]) );

