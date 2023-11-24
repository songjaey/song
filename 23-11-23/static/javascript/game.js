let board = new Array();

// 중복없이 25개 숫자 저장하기
for(var i=1; i<=25; i++){
  var tmp = ( Math.floor(Math.random() * 100 ) + 1 );
  if ( board.indexOf(tmp) == -1 )
    board.push(tmp);
  else
    i--;
}

$(function(){
  $.each( $( board ), function(i,v){ //i-인덱스, v-배열값
    $(".numBox").eq(i).text(v);
  })

  $(".numBox").on("click",function(){
    $(this).css("background","blue");
    $(this).css("color","white");
    var idx = $(".numBox").index(this);
    board[idx] = 0;
    endgame();
  });
});

function endgame(){
  var binggo = 0, sum = 0;
  //row 비교
  for(var i=0; i<=4; i++){
    sum = 0;
    for(var j=0; j<=4; j++){
        sum += board[i*5+j];
    }
    if(sum == 0)
      binggo++;
  }
  //col 비교
  for(var i=0; i<=4; i++){
    sum = 0;
    for(var j=0; j<=4; j++){
        sum += board[i+j*5];
    }
    if(sum == 0)
      binggo++;
  }
  //대각 비교
  sum = 0;
  for(var i=0; i<=4; i++){
    sum += board[6*i];
  }
  if(sum == 0)
      binggo++;
  //대각 비교
  sum = 0;
  for(var i=0; i<=4; i++){
    sum += board[4*i+4];
  }
  if(sum == 0)
      binggo++;

  // if(binggo == 5){
  //   document.write("빙고");
  // }   
  // else if( binggo == 6){
  //   document.write("땡");
  // }
  
  const modal = document.getElementById('result_modal');
  if( binggo == 5){
    modal.style.display = 'block';
    const content = document.getElementsByClassName(result);
    
    
  }
  else if( binggo == 6){
    modal.style.display = 'block';
  }
  
}
