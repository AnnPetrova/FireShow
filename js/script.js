//$(window).resize(function () {
//    var docWidth = $(document).width();
//    if( docWidth<1201 && docWidth>990) {
//        var maxHei = $('#block2').height();
//        for (var i = 1; i < 5; i++) {
//            if ($('#block' + i).height() > maxHei) {
//                maxHei = $('#t' + i).height();
//            }
//        }
//        console.log(maxHei);
//       /* for (var i = 1; i < 5; i++) {*/
//            $('.item').css('height', maxHei);
//       // }
//    }
//   /* if( docWidth<990 && docWidth>650){
//        $('.item' + i).css('height', maxHei);
//    }
//     else   if( docWidth<650)*/
//
//});


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

$(document).ready(function () {
    main();
});