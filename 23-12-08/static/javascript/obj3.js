// 객체, json


//전역변수
let name="";//입력한 이름
let age="";

let list=[];
let info={
 100: {name:"이순신", job:"군인", 활동지:"여수" },
 101: {name:"김유신", job:"군인", 활동지:"경주"},
 102: {name:"장보고", job:"군인", 활동지:"진도"},
 103: {name:"문익점", job:"산업스파이", 활동지:"원나라"},
};
//html태그 로드
$(function(){
  //$("#save").on("click", save);
  
});
function list_print(){
  let info_keys = Object.keys(info);

  for( var key of info_keys){
    $("#res").append( info[key].name + " " +info[key].job + " "+info[key].활동지 + "<br>" );
  }
  //alert( info[101].name);
}


function save(){
  name = $("#name").val();
  age = $("#age").val();
  alert(age);
  var obj = {이름:name, 나이:age};
  list.push(obj);

  var out = "";
  for( var object of list){
    out += object.이름 + " "+object.나이 +"<br>";
  }
  $("#res").html(out);
}