var slide = document.getElementById("lopr");
var soo = document.getElementById("sooo");
var slider = document.getElementById("lopra")

slide.addEventListener("click",function hide (){
    soo.classList.add("hidden")
})

slider.addEventListener("click",function show(){
    soo.classList.remove("hidden")
})