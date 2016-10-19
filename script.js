var flag1 = new Boolean(true);
var flag2 = new Boolean(true);

var main = function() {

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

  /*$('.cloud9-item').click(function() {
    if(flag1) {
      flag1 = false;
      $(this).animate({'width' : '200px', 'height' : '200px'}, 500);
    } else {
      flag1 = true;
      $(this).animate({'width' : '150px', 'height' : '150px'}, 500);
    }

      return false;
  });*/

/*$('.cloud9-item').mousedown(function() {
  $(this).animate({'width' : '300px', 'height' : '300px'}, 500);
});*/






}



function mute1() {
    $('.jquery-background-video').prop("muted", "muted");
    $('.mutBut').css("backgroundImage", 'url(kek1.png)');
}

function mute2() {
    $('.jquery-background-video').prop("muted", null);
    $('.mutBut').css("backgroundImage", 'url(kek.png)'); 
}

$(document).ready(main);