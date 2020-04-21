var scrollBtn = document.getElementById("scrollToTop");
var scrollAnimation = false;

window.addEventListener('load', () => scrollFunction());
window.addEventListener('scroll', () => scrollFunction());
window.addEventListener('wheel', () => scrollFunction(true));

function scrollFunction (mouseScrolling = false) {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
  if (mouseScrolling) {
    clearTimeout(scrollAnimation);
  }
}

function scrollToTopFn () {
  var position =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout(scrollToTopFn, 30);
  } else clearTimeout(scrollAnimation);
}