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
            //$('.wrap1').getElementsByTagName('a').css('display', 'block');
            $('body').addClass('keke');

            return false;
        })
        .mouseleave(function () {
            /*$( this ).find( "span" ).text( "mouse leave" );*/
        })
        .click(function () {
            if (!flag2) {
                flag2 = true;
                $('.wrap1').animate({'opacity': '0'}, 500);
                $('.content').animate({'opacity': '1'}, 500);
                $('body').removeClass('keke');

                $('body').css("backgroundImage", 'url(../images/05.jpg)');

            }
            return false;
        });

};

$(document).ready(main);