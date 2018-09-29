$(".band .artist-item").each(function(i,elem){
  $(this).hover(function(){
    $(this).find('.artist .artist-info').animate({
      "bottom":"5px"
    },{duration:200,queue:false});
  },function(){
    $(this).find('.artist .artist-info').animate({
      "bottom":"-23px"
    },{duration:200,queue:false});
  })
})
