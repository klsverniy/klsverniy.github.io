toper.classList.add("notinv")

var close= document.getElementById("close")
var toper = document.getElementById("toper")

function toperf (){
  toper.classList.add("inv2")
}

close.addEventListener("click", function (){
  toper.classList.add("inv");
  toper.classList.remove("notinv")
  setTimeout(toperf, 250)
})