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


function returnPeek(width) {
    var peek = 100;
    var view = 1;

    if (width > 1440) {
        view = 3;
        peek = 0;
    } else if (width >= 1200) {
        peek = 100;
        view = 2;
    } else if (width > 992) {
        peek = 50;
        view = 2;
    } else {
        peek = 0;
        view = 1;
    }

    return [peek, view];
}

var width = window.innerWidth;
    const sliderValues = returnPeek(width);
    var peek = sliderValues[0];
    var view = sliderValues[1];


// create mount
var glide = new Glide('.glide', {
    autoplay: 8000,
    hoverpause: true,
    perView: view,
    peek: peek,
    type: "carousel"
}).mount();

window.onresize = function(event) {
    var width = window.innerWidth;  
    const sliderValues = returnPeek(width);
    var peek = sliderValues[0];
    var view = sliderValues[1];

    glide.update({
        perView: view,
        peek: peek
    })
};



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
        $('#counter-seconds').addClass('full-width');
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
    if (scrollActive) {
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
    });
}

$(window).scroll(scrollToNextSection);
// $(document).ready(showVisibleFrame);

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: "#frame1",
    reverse: true,
    duration: "100%",
    triggerHook: .3
})
.on("enter", function() {
    $("#new-header").addClass("visible");
})
.on("leave", function() {
    $("#new-header").removeClass("visible");
})

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#frame2",
    triggerHook: .3, 
    duration: "100%",
})
.setClassToggle("#frame2 .frame-content", "visible")
// .setTween("#frame2 .frame-content", 1, {opacity: 1}) 

var scene3 = new ScrollMagic.Scene({triggerElement: "#frame3"})
.reverse(true)
// .setTween("#frame3 .frame-content", 1, {opacity: 1})
// .setClassToggle("#animate3", "add-border") 

var timeline3 = new TimelineMax();
var tween3_1 = TweenMax.to("#frame3 .frame-content", 1, {opacity: 1});
var tween3_2 = TweenMax.to(".add-border", 1, {width: "100%"});
timeline3.add(tween3_1).add(tween3_2);

scene3.setTween(timeline3);

var scene4 = new ScrollMagic.Scene({
    triggerElement: "#frame4",
    triggerHook: .3, 
    duration: "100%",
})
.setClassToggle("#frame4 .frame-content", "visible")

var scene5 = new ScrollMagic.Scene({
    triggerElement: "#frame5",
    reverse: true
})
.setTween("#frame5 .frame-content", 1, {opacity: 1}) 

var scene6 = new ScrollMagic.Scene({triggerElement: "#frame6"})
.reverse(true)
.on("enter", function () {   
    $("#frame6 .frame-content").css("opacity", 100);
    animateCounter('counter', 0, 40, 1500, counterDone);

})  
.on("leave", function () {
    $("#frame6 .frame-content").css("opacity", "");
    $('#counter').val(0);
    $('.counter-additional').removeClass('visible');
    $('#counter-seconds').removeClass('full-width');
})

var scene7 = new ScrollMagic.Scene({triggerElement: "#frame7"})
.reverse(true)
.on("enter", function () {   
    $("#frame7 .frame-content").css("opacity", 100);
})  
.on("leave", function () {
    $("#frame7 .frame-content").css("opacity", "");
})

var scene8 = new ScrollMagic.Scene({triggerElement: "#frame8"}  )
.reverse(true)
.on("enter", function () {   
    $("#frame8 .frame-content").css("opacity", 100);
    $("#new-header").addClass("white");
    $("#new-header").addClass("visible");

})  
.on("leave", function () {
    $("#frame8 .frame-content").css("opacity", "");
    $("#new-header").removeClass("white");
    $("#new-header").removeClass("visible");
})
                


        
controller.addScene([scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8]);