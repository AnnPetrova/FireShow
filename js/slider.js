var k;
var maxHei = $('#t1').height();

$(window).resize(function () {
    //var docWidth = $(document).width();
    //helpToResize(docWidth);
    
    for (var i = 1; i < 15; i++) {
        if ($('#t' + i).height() >= maxHei) {
            maxHei = $('#t' + i).height();
            k = i;
        }
    }
    //console.log($('#t4').height());
    console.log(maxHei);
    console.log(k);
    
    $('#showcase').data('carousel').xRadius = $('#showcase').width() / 2;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width() * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = maxHei * 0.85;
    //var h = $('#showcase').data('carousel').yRadius;
  
});

/*function helpToResize(docWidth){
    var maxHei = $('#t1').height();
    var circlePar = 0.85;
    var topParam = 0.7;

    var k = 1;
    for (var i = 1; i < 15; i++) {
        if ($('#t' + i).height() > maxHei) {
            maxHei = $('#t' + i).height();
            k = i;
        }
    }
    //$('#showcase').css('padding-top', (maxHei * 0.45));

    //$('#showcase').height(maxHei + 350);

    if (docWidth <= 1200 && docWidth > 1000) {
        circlePar = 0.55;
        topParam = 0.75;
    }
    else if (docWidth > 800 && docWidth < 1000) {
        circlePar = 0.45;
        topParam = 0.35;
        $('#showcase').css('padding-top', (maxHei * 0.2));
        $('#showcase').height(maxHei + 150);
    }
    else if (docWidth >= 600 && docWidth < 800) {
        circlePar = 0.43;
        topParam = 0.39;
        $('#showcase').css('padding-top', (maxHei * 0.2));
        $('.logo').css('right', docWidth * 0.26);
    }
    else if (docWidth <= 1800 && docWidth > 1350) {
        circlePar = 0.72;
        topParam = 0.75;
    }
    else if (docWidth <= 2100 && docWidth > 1800) {
        circlePar = 0.6;
        topParam = 0.8;
    }
    else if (docWidth > 2100) {
        circlePar = 0.6;
        topParam = 0.8;
    }

//    $('#showcase').css('padding-top', (maxHei * 0.45));
    //console.log(maxHei);
    $('.logoin').css('top', maxHei / 2);

    $('#showcase').data('carousel').xRadius = $('#showcase').width() / 2;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width() * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = maxHei;
}*/

$(function () {
    var showcase = $("#showcase"), title = $('#item-title');


    showcase.Cloud9Carousel({

        mouseWheel: false,
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
        onLoaded: function () {
            showcase.css('visibility', 'visible')
            showcase.css('display', 'none')
            showcase.fadeIn(1200)

        }
    })
    function rendered(carousel) {

    /*$('#showcase').data('carousel').xRadius = $('#showcase').width() / 2;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width() * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = $('#showcase').height() / 6;
    var h = $('#showcase').data('carousel').yRadius;
    $('.logoin').css('top', h);*/

    for (var i = 1; i < 15; i++) {
        if ($('#t' + i).height() >= maxHei) {
            maxHei = $('#t' + i).height();
            k = i;
        }
    }
    
    $('#showcase').data('carousel').xRadius = $('#showcase').width() / 2;
    $('#showcase').data('carousel').xOrigin = $('#showcase').width() * 0.5;
    $('#showcase').data('carousel').yOrigin = $('#showcase').height() * 0.1;
    $('#showcase').data('carousel').yRadius = maxHei * 0.85; //$('#showcase').height() / 2.8;


        title.text(carousel.nearestItem().element.alt);

        // Fade in based on proximity of the item
        var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI);
        title.css('opacity', 0.5 + (0.5 * c));

        var docWidth = $(document).width();
        var circleParam = 250;

        //helpToResize(docWidth);


        if (docWidth <= 850 && docWidth > 600)
            circleParam = docWidth * 0.3;
        else if (docWidth <= 600)
            circleParam = docWidth * 0.35;

        for (var i = 1; i < 15; i++) {
            var index = document.getElementById(i).style.zIndex;
            var pad = $('#showcase').css('padding-top');
            if (index === '100') {
                if(k == i) {
                    $('.logoin').css('top', maxHei / 3.5 + parseInt(pad));
                }
                if(k != i) {
                    $('.logoin').css('top', maxHei / 2.5 + parseInt(pad));
                }
                $('#' + i).animate({'width': circleParam, 'height': circleParam}, 500);
                $('#' + 'p' + i).fadeIn(500);
                var str = document.getElementById('t' + i).innerHTML;
                $('.logoin').html(str);
                $('#' + 'blur' + i).animate({'width': circleParam, 'height': circleParam});
                $('#' + 'blur' + i).fadeIn(300);

                for (var j = 1; j < 15; j++) {
                    if (j !== i) {
                        $('#' + j).animate({'width': circleParam * 0.7, 'height': circleParam * 0.7}, 500);
                        $('#' + 'p' + j).fadeOut(500);
                        $('#' + 'blur' + j).animate({'width': circleParam * 0.7, 'height': circleParam * 0.7});
                        $('#' + 'blur' + j).fadeOut(300);
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
