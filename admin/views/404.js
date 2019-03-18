$(function() {
    // ·µ»ØÊ×Ò³
    var sec = 5,
        intervalID = setInterval(function() {
            if (sec > 1) {
                sec = sec - 1;
                $('time').text(sec);
            } else {
                clearInterval(intervalID);
                linkTo('/', 'home');
            }
        }, 1000);
    $('time').text(sec);
});