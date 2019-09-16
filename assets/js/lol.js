
var close= document.getElementById("close")
var toper = document.getElementById("toper")

function toperf (){
  toper.classList.add("inv2")
}

close.addEventListener("click", function (){
  toper.classList.add("inv");
  setTimeout(toperf, 250)
})