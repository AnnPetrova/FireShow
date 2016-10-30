
var flag1 = new Boolean(true);
var flag2 = new Boolean(true);
var docHeight = $(window).height();


var main = function() {

$('.jquery-background-video-wrapper').css({'height' : docHeight});
$('.video-hero--content').css({'margin-top' : docHeight / 2});
//$('#downbut').css({'margin-top' : docHeight / 3});
//$('#showcase').css({'height' : docHeight + 70});

 $('#downbut').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
});

$('.jquery-background-video').bgVideo({fadeIn: 2000});
  $('#menuToggle').on('click', function(){  
  $('#theMenu').toggleClass('menu-open');
});

  $('.mutBut').click(function() {
    if(flag2) {
      flag2 = false;
      mute1.call(this);
    } else {
      flag2 = true;
      mute2.call(this);
    }
      return false;
  });
}



function mute1() {
    $('.jquery-background-video').prop("muted", "muted");
    $('.mutBut').css("backgroundImage", 'url(../images/kek1.png)');
}

function mute2() {
    $('.jquery-background-video').prop("muted", null);
    $('.mutBut').css("backgroundImage", 'url(../images/kek.png)');
}

$(document).ready(function () {
    main();
});