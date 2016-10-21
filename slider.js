/**
 * Created by Евгений on 10/22/2016.
 */

$(window).resize(function(){
    $('#showcase').data('carousel').xRadius = $('#showcase').width()  / 2.3;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width()  * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = $('#showcase').height() / 6;
    $('#showcase').data('carousel').render();

});

$(function() {
    var showcase = $("#showcase"), title = $('#item-title')

    showcase.Cloud9Carousel( {

        yRadius: 120,

        mouseWheel: true,
        fps: 100,
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
        onLoaded: function() {
            showcase.css( 'visibility', 'visible' )
            showcase.css( 'display', 'none' )
            showcase.fadeIn(1200)

        }
    } )

    function rendered( carousel ) {
        title.text( carousel.nearestItem().element.alt )

        // Fade in based on proximity of the item
        var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))



        for(var i = 1; i < 15; i++) {
            var index = document.getElementById(i).style.zIndex;

            if(index === '100') {
                $('#' + i).animate({'width' : '200px', 'height' : '200px'}, 500);
                $('#' + 'p' + i).fadeIn(500);
                var str = document.getElementById('t' + i).innerHTML;
                $('#kekylya').text(str);
                $('#' + 'blur' + i).animate({'width' : '200px', 'height' : '200px'});
                $('#' + 'blur' + i).fadeIn(300);

                for(var j = 1; j < 15; j++) {
                    if(j !== i) {
                        $('#' + j).animate({'width' : '150px', 'height' : '150px'}, 500);
                        $('#' + 'p' + j).fadeOut(500);
                        $('#' + 'blur' + j).animate({'width' : '150px', 'height' : '150px'});
                        $('#' + 'blur' + j).fadeOut(300);
                    }
                }
            }
        };

    }

    //
    // Simulate physical button click effect
    //
    $('#nav > button').click( function( e ) {
        var b = $(e.target).addClass( 'down' )
        setTimeout( function() { b.removeClass( 'down' ) }, 80 )
    } )

    $(document).keydown( function( e ) {
        switch( e.keyCode ) {
            /* left arrow */
            case 37:
                $('#nav > .left').click()
                break

            /* right arrow */
            case 39:
                $('#nav > .right').click()
        }
    } )
})
