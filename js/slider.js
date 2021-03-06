var k;
var maxHei = $('#t1').height();
var h, fH;

$(window).resize(function () {
    for (var i = 1; i < 15; i++) {
        if ($('#t' + i).height() >= maxHei) {
            maxHei = $('#t' + i).height();
            k = i;
        }
    }

    $('#showcase').data('carousel').xRadius = $('#showcase').width() / 2;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width() * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = maxHei * 0.87;

    //FOR VIDEO
    
    var docHeight = $(window).height();
    $('.jquery-background-video-wrapper').css({'height' : docHeight});
    $('.video-hero--content').css({'margin-top' : docHeight / 2});
  
});

$(function () {
    var showcase = $("#showcase"), title = $('#item-title');


    showcase.Cloud9Carousel({

        mouseWheel: false,
        fps: 200,
        speed: 10,
        /*mirror: {
         gap: 12,
         height: 0.2
         },*/
        buttonLeft: $("#nav > .left"),
        buttonRight: $("#nav > .right"),
        autoPlay: 1,
        autoPlayDelay: 1500,
        bringToFront: true,
        onRendered: rendered,
        onLoaded: function () {
            showcase.css('visibility', 'visible')
            showcase.css('display', 'none')
            showcase.fadeIn(1200)

        }
    })
    function rendered(carousel) {

    for (var i = 1; i < 15; i++) {
        if ($('#t' + i).height() >= maxHei) {
            maxHei = $('#t' + i).height();
            k = i;
        }
    }
    
    $('#showcase').data('carousel').xRadius = $('#showcase').width() / 2.2;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width() * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = maxHei * 0.87; //$('#showcase').height() / 2.8;

        title.text(carousel.nearestItem().element.alt);

        // Fade in based on proximity of the item
        var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI);
        title.css('opacity', 0.5 + (0.5 * c));

        var docWidth = $(document).width();
        var circleParam = 260;

        //helpToResize(docWidth);


        if (docWidth <= 1000 && docWidth > 700) {
            circleParam = docWidth * 0.26;
            $('#showcase').data('carousel').yRadius = maxHei * 0.6;
        } if (docWidth <= 700 && docWidth > 550) {
            circleParam = docWidth * 0.33;
            $('#showcase').data('carousel').yRadius = maxHei * 0.65;
        } else if (docWidth <= 550){
            circleParam = docWidth * 0.38;
            $('#showcase').data('carousel').yRadius = maxHei * 0.7;
        }

        for (var i = 1; i < 15; i++) {
            var index = document.getElementById(i).style.zIndex;
            var pad = $('#showcase').css('padding-top');
            if (index === '100') {
                if(k == i) {
                    $('.logoin').css('top', maxHei / 5 + parseInt(pad));
                }
                if(k != i) {
                    //$('.logoin').css('top', maxHei / 2.5 + parseInt(pad));
                    h = $('#' + 't' + i).height();
                    fH = (maxHei - h) / 2.25;
                    $('.logoin').css('top', fH + parseInt(pad));
                }
                
                $('#' + i).animate({'width': circleParam, 'height': circleParam}, 500);
                $('#' + 'p' + i).fadeIn(500);
                var str = document.getElementById('t' + i).innerHTML;
                $('.logoin').html(str);
                $('#' + 'blur' + i).animate({'width': circleParam, 'height': circleParam});
               /* $('#' + 'blur' + i).fadeIn(300);*/
                //var img = document.getElementById('b' + i).innerHTML;
                $('.keke').css({'backgroundImage' : 'url(../images/' + 0 + i + '.jpg)'});
                $('.just_shake_that_ass').css({'backgroundImage' : 'url(../images/' + 0 + i + '.jpg)'});
                /*$('body').animate({'opacity':'0'},600,function(){
                    $(this).css({'backgroundImage' : 'url(../img/' + 0 + i + '.jpg)'});
                    $(this).animate({'opacity':'1'},600);
                });*/


                for (var j = 1; j < 15; j++) {
                    if (j !== i) {
                        $('#' + j).animate({'width': circleParam * 0.7, 'height': circleParam * 0.7}, 500);
                        $('#' + 'p' + j).fadeOut(500);
                        $('#' + 'blur' + j).animate({'width': circleParam * 0.7, 'height': circleParam * 0.7});
                      /*  $('#' + 'blur' + j).fadeOut(300);*/
                    }
                }
            }
        };

    }

    //
    // Simulate physical button click effect
    //
    $('#nav > button').click(function (e) {
        var b = $(e.target).addClass('down');
        setTimeout(function () {
            b.removeClass('down')
        }, 80);
    })

    $(document).keydown(function (e) {
        switch (e.keyCode) {
            /* left arrow */
            case 37:
                $('#nav > .left').click();
                break;

            /* right arrow */
            case 39:
                $('#nav > .right').click();
        }
    })
})
