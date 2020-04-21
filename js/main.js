new Glide('.glide', {
    autoplay: 8000,
    hoverpause: true,
    type: "carousel"
}).mount()

new Glide('.news-carousel', {
    hoverpause: true,
    type: "carousel",
    autoplay: 8000
}).mount()

var tweetsGlide = new Glide('.tweets', {
  autoplay: 8000,
  type: "carousel",
  perView: 3,
}).mount()
tweetsGlideResize();
window.addEventListener('resize', function () {
  tweetsGlideResize();
});

function tweetsGlideResize () {
  if (window.innerWidth < 768) {
    tweetsGlide.update({
      perView: 1
    })
  }
  else if (window.innerWidth < 1342) {
    tweetsGlide.update({
      perView: 2
    })
  }
  else {
    tweetsGlide.update({
      perView: 3
    })
  }
}

document.getElementById("tab-button1").addEventListener("click", function () {openTab("tab-button1","option1")});
document.getElementById("tab-button2").addEventListener("click", function () {openTab("tab-button2","option2")});
document.getElementById("tab-button3").addEventListener("click", function () {openTab("tab-button3","option3")});


function openTab(id1, id2) {
    var i, tabContents, tabs;

    tabContents = document.getElementsByClassName("content");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].className = tabContents[i].className.replace(" active", "");
    }

    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(id1).className  += " active";
    document.getElementById(id2).className  += " active";
}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
    var e = document.documentElement;
    if(e.scrollTop===0){
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t+1===e.scrollTop--?e:document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if(typeof from === "object")from=from.offsetTop;
    if(typeof to === "object")to=to.offsetTop;

    scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed<= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;

    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}
function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}

var makeAMaskArray = document.querySelectorAll("a[href='#make-a-mask']");

Array.from(makeAMaskArray).forEach(function(element) {
  element.addEventListener('click', makeAMaskEvent);
});

function makeAMaskEvent (e) {
  e.preventDefault();
  e.stopPropagation();
  var element = document.getElementById('make-a-mask').offsetTop;
  // window.scrollTo({
  //   top: element - 50,
  //   behavior: "smooth",
  //   block: 'start'
  // });
  scrollTo(element - 50, 2000);
  removeNavActiveClass();
}

function removeNavActiveClass () {
  if (document.querySelector("#navigation").classList.contains("active")) {
    document.querySelector("#navigation").classList.remove("active");
  }
}
