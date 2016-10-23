var main = function() {

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

$('.cloud9-item').click(function() {
    var x = $(this).attr('id');
    /*$('#' + x).animate({'width' : '200px', 'height' : '200px'}, 500);
    $('#' + 'p' + x).fadeIn(500);
    var str = document.getElementById('t' + x).innerHTML;
    $('#kekylya').text(str);
    $('#' + 'blur' + x).animate({'width' : '200px', 'height' : '200px'});
    $('#' + 'blur' + x).fadeIn(300);*/
    for(var i = 1; i < 15; i++) {
      if(x != i) {
        $('#' + i).animate({'width' : '150px', 'height' : '150px'}, 500);
        $('#' + 'p' + i).fadeOut(500);
        $('#' + 'blur' + i).animate({'width' : '150px', 'height' : '150px'});
        $('#' + 'blur' + i).fadeOut(300);
      }
    }
});







/*$('.close').click(function() {
    var x = $(this).attr('id');
    var y = x.substr(-1);
    $('#' + y).animate({'width' : '150px', 'height' : '150px'}, 500);
    $('#' + 'p' + y).fadeOut(500);
    $('#' + 'blur' + y).animate({'width' : '150px', 'height' : '150px'});
    $('#' + 'blur' + y).fadeOut(300); 

});*/





}

$(document).ready(main);