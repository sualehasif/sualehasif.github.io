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

// create mount
new Glide('.glide', {
    autoplay: 8000,
    hoverpause: true,
    perView: 3,
    peek: 100,
    type: "carousel"
}).mount();

// Handle frame animations on scroll
var counterAnimationStarted = false;
var counterAnimationCompleted = false;
var activeFrameIndex = 0;
var scrollY = 0;
var scrollActive = false;
var numFrames = $('.frame').length;

function counterDone() {
    $('#counter').addClass('c-danger');
    setTimeout(function () {
        $('#counter-seconds').fadeIn(1000).css("display", "inline-block");
        setTimeout(function () {
            counterAnimationCompleted = true;

            // TODO - change this from a fade to a slide to right
            $('.counter-additional').addClass('visible');
        }, 2000)
    }, 2000)
}

function showVisibleFrame() {
    $('.frame-content').each(function (index, frame) {

        // the first frame should always be visible
        if (index === 0) {
            return;
        }

        var pixelThreshold = parseInt($(frame).attr('animation-threshold')) || 200;

        if (isElementInView(frame, true, pixelThreshold)) {
            activeFrameIndex = index;
            $(frame).addClass('visible');

            if (index === 5 && !counterAnimationStarted) {
                counterAnimationStarted = true;
                animateCounter('counter', 0, 40, 1500, counterDone);
            }
            return;
        }

        $(frame).removeClass('visible');
    });

    if (activeFrameIndex > 5) {
        $('.container').addClass('light');

        // note this user as non first-timer
        localStorage.setItem('session-id', 'maskbanao');
    } else {
        $('.container').removeClass('light');
    }
}

function scrollToNextSection() {
    if (scrollActive || (counterAnimationStarted && !counterAnimationCompleted)) {
        return false;
    }

    var st = window.pageYOffset || document.documentElement.scrollTop;
    activeFrameIndex = (st > scrollY) ? activeFrameIndex + 1 : activeFrameIndex - 1;
    if (activeFrameIndex < 0) {
        activeFrameIndex = 0;
    } else if (activeFrameIndex >= numFrames) {
        activeFrameIndex = numFrames - 1;
    }

    scrollActive = true;
    $(window).scrollTo($(`.frame:eq(${activeFrameIndex})`), 1000, function() {
        setTimeout(function() {
            scrollActive = false;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            scrollY = st <= 0 ? 0 : st;
        }, 100);

        if(activeFrameIndex !== 1) {
            $(`.frame-content:eq(${activeFrameIndex-1})`).removeClass('visible');
        }
        $(`.frame-content:eq(${activeFrameIndex})`).addClass('visible');

        if (activeFrameIndex === 5 && !counterAnimationStarted) {
            counterAnimationStarted = true;
            animateCounter('counter', 0, 40, 1500, counterDone);
        }
    });
}

$(window).scroll(scrollToNextSection);
$(document).ready(showVisibleFrame);