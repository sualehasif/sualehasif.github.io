// If user is a non first-timer, show them a Visit main page button
if (localStorage.getItem('session-id')) {
    $('#main-btn').show();
}

// Add some bounce to the arrows
anime({
    targets: '#arrows',
    bottom: '70px',
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});

// On click of the arrows, scroll into first frame
$('#arrows').click(function () {
    $(window).scrollTo($('.frame:eq(1)'), 1000);
});

// Handle frame animations on scroll
var counterAnimationStarted = false;
var activeFrameIndex = 0;

function counterDone() {
    $('#counter').addClass('c-danger');
    setTimeout(function () {
        $('#counter-seconds').fadeIn(1000).css("display", "inline-block");
        setTimeout(function () {

            // TODO - change this from a fade to a slide to right
            $('.counter-additional').addClass('visible');
        }, 2000)
    }, 2000)
}

function showVisible() {
    $('.frame-content').each(function (index, frame) {
        if (isElementInView(frame, true, parseInt($(frame).attr('animation-threshold')) || 200)) {
            activeFrameIndex = index;

            $(frame).addClass('visible');
            if (index === 0) {
                $('#arrows').addClass('visible');
                return;
            }

            if (index === 5 && !counterAnimationStarted) {
                counterAnimationStarted = true;
                animateCounter('counter', 0, 40, 1500, counterDone);
                return;
            }

            return;
        }

        $(frame).removeClass('visible');
        if (index === 0) {
            $('#arrows').removeClass('visible');
            return;
        }
    });

    if (activeFrameIndex > 5) {
        $('.container').addClass('light');

        // note this user as non first-timer
        localStorage.setItem('session-id', 'maskbanao')
    } else {
        $('.container').removeClass('light');
    }
}

$(window).scroll(showVisible);
$(document).ready(showVisible);