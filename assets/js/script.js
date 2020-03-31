window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 750) {
      document.getElementById("up").classList.add ("opacity")
    } else {
      document.getElementById("up").classList.remove ("opacity")
    }
    prevScrollpos = currentScrollPos;
  }



var button = document.getElementById('jse')
var toper = document.getElementById("toper")
var close = document.getElementById("close")

button.addEventListener("click", function click() {
  toper.classList.add("invisible")
})

close.addEventListener("click", function click() {
  toper.classList.add("invisible")
})