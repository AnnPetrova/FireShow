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