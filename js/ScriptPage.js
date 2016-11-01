var main = function () {
    var flag2 = new Boolean(true);

    /*$('#donebut').click(function() {
     if(flag2) {
     flag2 = false;
     $('.wrap1').animate({'opacity' : '1'}, 500);
     $('.content').animate({'opacity' : '0'}, 500);
     //$('.wrap1').getElementsByTagName('a').css('display', 'block');
     $('body').addClass('keke');

     } else {
     flag2 = true;
     $('.wrap1').animate({'opacity' : '0'}, 500);
     $('.content').animate({'opacity' : '1'}, 500);
     $('body').removeClass('keke');

     $('body').css("backgroundImage", 'url(../images/05.jpg)');

     }
     return false;
     });*/

    /*  $( "#donebut" )
     .mouseover(function() {
     i += 1;
     $( this ).find( "span" ).text( "mouse over x " + i );
     })
     .mouseout(function() {
     $( this ).find( "span" ).text( "mouse out " );
     });*/
    var n = 0;
    $("#donebut")
        .mouseenter(function () {
            n += 1;
            /*$( this ).find( "span" ).text( "mouse enter x " + n );*/
            flag2 = false;
            $('.wrap1').animate({'opacity': '1'}, 500);
            $('.content').animate({'opacity': '0'}, 500);
            $('.wrap1').removeClass('animated fadeOutRight');
            $('.wrap1').addClass('animated fadeInRight');
            $('.wrap1').css({'z-index' : '100'});

            //$('.wrap1').getElementsByTagName('a').css('display', 'block');
            $('body').addClass('keke');
            $('#donebut').css("backgroundImage", 'url(../images/next.png)');

            return false;
        })
        .mouseleave(function () {
            /*$( this ).find( "span" ).text( "mouse leave" );*/
        })
        .click(function () {
            if (!flag2) {
                flag2 = true;
                $('.wrap1').animate({'opacity': '0'}, 500);
                $('.wrap1').removeClass('animated fadeInRight');
                $('.wrap1').addClass('animated fadeOutRight');
                $('.wrap1').css({'z-index' : '0'});

                $('.content').animate({'opacity': '1'}, 1000);
                $('body').removeClass('keke');

                $('body').css("backgroundImage", 'url(../images/05.jpg)');
                $('#donebut').css("backgroundImage", 'url(../images/prev.png)');

            }
            return false;
        });

};

$(document).ready(main);