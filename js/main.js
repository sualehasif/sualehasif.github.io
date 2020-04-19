document.getElementById("navbar-hamburger").addEventListener("click", function() {
    document.getElementById("navigation").classList.toggle("active");
});

new Glide('.glide', {autoplay: 5000,
    hoverpause: true,
    type: "carousel"
   }).mount()

new Glide('.news-carousel', {
            hoverpause: true,
            type: "carousel"
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