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

var currentNavElement = document.querySelector('#navigation a[href="' + location.pathname + '"]');
if (currentNavElement) {
    currentNavElement.classList.add("active");
}