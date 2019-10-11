window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 750) {
      document.getElementById("up").classList.add ("opacity")
    } else {
      document.getElementById("up").classList.remove ("opacity")
    }
    prevScrollpos = currentScrollPos;
  }



