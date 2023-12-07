$(function(){
  var scis = document.getElementById("scissors");
  var rock = document.getElementById("rock");
  var paper = document.getElementById("paper");
  var myImage = document.getElementById("mainImage");
  var imageArray = ["paper.png", "rock.png", "scissors.png"];
  var idx = 0;
  let interval = setInterval(changeImage,300);

   function changeImage(){
      // 가위 바위 보 게임 만들기 
    // 1.가위(imageArray[2])  2.바위(imageArray[1])  3.보(imageArray[0])
    
      myImage.setAttribute("src", imageArray[idx]);
      if(idx==0) com = 3;
      else if(idx==1) com = 2;
      else com = 1;
      game();
      idx++;
      if(idx==3) idx = 0;
    }
    
    function game(){
      scis.addEventListener("click",function(){  // 가위클릭
        if( com==1 ){
           $("#res").text("비김");
            //alert("비김");
            clearInterval(interval);
        }else if(com==3 ){
          $("#res").text("승");   
          //alert("승"); 
          clearInterval(interval); 
        }
        else{ 
          $("#res").text("패"); 
          //alert("패");  
          clearInterval(interval); 
        }
        //com = Math.floor(Math.random()*3)+1;
    });
    rock.addEventListener("click",function(){ // 바위 클릭
        if( com==2 ){
          $("#res").text("비김"); 
          //alert("비김"); 
          clearInterval(interval);
        }
        else if( com==1 ) { 
          $("#res").text("승");
          //alert("승");
          clearInterval(interval); 
        }
        else{
          $("#res").text("패"); 
          //alert("패"); 
          clearInterval(interval);
        }
      
    }); 
    paper.addEventListener("click",function(){  //보 클릭
        if( com == 3 ){
          $("#res").text("비김"); 
          //alert("비김");  
          clearInterval(interval);
        }
        else if( com == 2 ) {
          $("#res").text("승"); 
          //("승"); 
          clearInterval(interval);
        }
        else{ 
          $("#res").text("패");
          //alert("패");
          clearInterval(interval); 
        }
        
    });
    }
    
   
  });