
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector("#navbar-toscroll").style.top = "0";
  } else {
    document.querySelector("#navbar-toscroll").style.top = "-60px";

  }
}
