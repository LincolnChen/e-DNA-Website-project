var d = document
var w = window
w.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (d.body.scrollTop > 20 || d.documentElement.scrollTop > 20) {
    d.getElementById("backtotop").style.display = "block";
  } else {
    d.getElementById("backtotop").style.display = "none";
  }
}

function topFunction() {
  d.body.scrollTop = 0;
  d.documentElement.scrollTop = 0;
}
