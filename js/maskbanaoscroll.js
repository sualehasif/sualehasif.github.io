width = $(window).width();
var height = $( window ).height();
var halfHeight = height/2;

if (width <= 768) {
    height = ($( window ).height()/2);
    halfHeight = height/2;
}


$( window ).resize(function() {
    height = $(window).height();
    halfHeight = height/2;
    width = $(window).width();
    if (width <= 768) {
        height = ($( window ).height()/2);
        halfHeight = height/2;
    }
  });

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var pos = Math.floor(scroll/halfHeight);
    var newPos = pos+1;

    console.log("new Post " + newPos)
    if ((pos != 0) && (pos != 10)) {
        console.log(newPos);
        $('.image-container img').attr("src","images/mask/"+ newPos +".png");
    }
    else if (pos >= 10) {
        $('.image-container img').attr("src","images/mask/10.png");
    }
    else {
        $('.image-container img').attr("src","images/mask/1.png");
    }
    console.log("old pos" + pos);
});