
//var com = Math.floor(Math.random()*3)+1;
$(function(){
  var scis = document.getElementById("scissors");
  var rock = document.getElementById("rock");
  var paper = document.getElementById("paper");
  var myImage = document.getElementById("mainImage");
  var imageArray = ["paper.png", "rock.png", "scissors.png"];
  var idx = 0;
  let interval = setInterval(changeImage,300);

   function changeImage(){
      myImage.setAttribute("src", imageArray[idx]);




      
      idx++;
      if(idx>=3) idx = 0;
    }
    // 가위 바위 보 게임 만들기 
    // 1.가위(imageArray[2])  2.바위(imageArray[1])  3.보(imageArray[0])

    
    //var user = parseInt(prompt("1.가위  2.바위  3.보"));
    
    if(imageArray[idx] ==="paper.png") com = 3;
    else if(imageArray[idx] ==="rock.png") com = 2;
    else com = 1;
    scis.addEventListener("click",function(){  // 가위클릭
        if( com==1 ){
            alert("비김");
            clearInterval(interval);
        }else if(com==3 ){   
          alert("승"); 
          clearInterval(interval); 
        }
        else{  
          alert("패");  
          clearInterval(interval); 
        }
        //com = Math.floor(Math.random()*3)+1;
        scis.style.background="black";
        rock.style.background="white";
        paper.style.background="white";
    });
    rock.addEventListener("click",function(){ // 바위 클릭
        if( com==2 ){ 
          alert("비김"); 
          clearInterval(interval);
        }
        else if( com==1 ) { 
          alert("승");
          clearInterval(interval); 
        }
        else{ 
          alert("패"); 
          clearInterval(interval);
        }
        //com = Math.floor(Math.random()*3)+1;
    }); 
    paper.addEventListener("click",function(){  //보 클릭
        if( com == 3 ){ 
          alert("비김");  
          clearInterval(interval);
        }
        else if( com == 2 ) { 
          alert("승"); 
          clearInterval(interval);
        }
        else{ 
          alert("패");
          clearInterval(interval); 
        }
        //com = Math.floor(Math.random()*3)+1;
    });

    // if( com == user){
    //     alert("비김");
    // }else if( (com==1&&user==2) || (com==2 && user==3) || (com==3 && user==1)  ){
    //     alert("승");
    // }else{
    //     alert("패");
    // }
   
  });