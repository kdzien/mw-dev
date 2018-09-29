let is_menu_hide = false;
$(".menu-button.open").click(function(){
  $("#menu").animate({left:"0px"});
  is_menu_hide = !is_menu_hide
})
$(".menu-button.closeb").click(function(){
  $("#menu").animate({left:"-400px"});
  is_menu_hide = !is_menu_hide  
})
$('#menu').find('li').each(function(){
  $(this).click(function(){
      $('body').scrollTo($(`#${$(this).attr("data-scroll")}`).offset().top,800);
      $("#menu").animate({left:"-400px"});
      is_menu_hide = !is_menu_hide      
  })
})

$('body').click(function(e) {
  
  if(is_menu_hide && e.pageX>400){
    $("#menu").animate({left:"-400px"});
    is_menu_hide = !is_menu_hide
  }
});