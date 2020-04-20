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

var makeAMaskArray = document.querySelectorAll("a[href='#make-a-mask']");

Array.from(makeAMaskArray).forEach(function(element) {
  element.addEventListener('click', makeAMaskEvent);
});

function makeAMaskEvent (e) {
  e.preventDefault();
  e.stopPropagation();
  var element = document.getElementById('make-a-mask').offsetTop;
  window.scrollTo({
    top: element - 50,
    behavior: "smooth",
    block: 'start'
  });
  removeNavActiveClass();
}

function removeNavActiveClass () {
  if (document.querySelector("#navigation").classList.contains("active")) {
    document.querySelector("#navigation").classList.remove("active");
  }
}