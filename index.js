





let input = document.getElementById("input");
let btn = document.getElementById("btn")
let box = document.getElementById("box")
let cantainer = document.getElementById("form1");
btn.addEventListener("click",function(){
let p = document.createElement("p");
let img = document.createElement("img");
 img.src = "th__14_-removebg-preview.png";
 img.classList.add("img1")
 box.appendChild(img)
p.classList.add("elem");
p.innerHTML = input.value;
box.appendChild(p)
input.value = "";
img.addEventListener("click",function(){
    box.removeChild(p)
    box.removeChild(img)
})
});







