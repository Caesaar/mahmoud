$(document).ready(function(){
    var offset = 250;
    var duration = 500;
    
    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('.to-top').fadeIn(duration);
        }else{
            $('.to-top').fadeOut(duration);
        }
    });
    
    $('.to-top').click(function(){
        $('body').animate({scrollTop: 0}, duration);
    })
});
var arrlang = {
    'En' : {
        'Home' : 'Home' ,
        'Provisions' : 'Provisions' ,
        'decoration' : 'decoration' ,
        'icons' : 'icons' ,
    },
    'Ar' : {
      'Home' : 'الرئيسية' ,
        'Provisions' : 'زخرفة' ,
        'decoration' : 'القوانين' ,
        'icons' : 'سمايلات' ,  
    }
};

$(function(){
  $('.dropdown-toggle').click(function(){
      var lang = $(this).attr('id');
      
      $('.nav-item').each(function(index, Element){
          $(this).text(arrlang[lang][$(this).attr('key')]);
      });
  });
  });
