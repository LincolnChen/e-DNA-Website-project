var d = document
var w = window
w.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (d.body.scrollTop > 50 || d.documentElement.scrollTop > 50) {
    d.getElementById("backtotop").style.display = "block";
  } else {
    d.getElementById("backtotop").style.display = "none";
  }
}

function topFunction() {
  d.body.scrollTop = 0;
  d.documentElement.scrollTop = 0;
}



function menu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
