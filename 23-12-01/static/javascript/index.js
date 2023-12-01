$(function(){
  $(".menuList>.menuItem").on("mouseover", function(){
      $(this).children(".subMenu").toggle();
  });
  $(".menuList>.menuItem").on("mouseout", function(){
    $(this).children(".subMenu").slideUp();
  })
});