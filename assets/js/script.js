window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 750) {
      document.getElementById("up").classList.add ("opacity")
    } else {
      document.getElementById("up").classList.remove ("opacity")
    }
    prevScrollpos = currentScrollPos;
  }

var close= document.getElementById("close")
var toper = document.getElementById("toper")

function toperf (){
  toper.classList.add("inv2")
}

close.addEventListener("click", function (){
  toper.classList.add("inv");
  setTimeout(toperf, 250)
})