var slide = document.getElementById("lopr");
var soo = document.getElementById("sooo");
var slider = document.getElementById("lopra")

slide.addEventListener("click",function hide (){
    soo.classList.add("hidden")
    slide.classList.add("off")
    slider.classList.remove("off")
})

slider.addEventListener("click",function show(){
    soo.classList.remove("hidden")
    slide.classList.remove("off")
    slider.classList.add("off")
})