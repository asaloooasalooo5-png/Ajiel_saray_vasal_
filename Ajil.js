// =======================
// HEADER SCROLL EFFECT
// =======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background =
"rgba(0,0,0,.95)";

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,.25)";

}else{

header.style.background =
"rgba(0,0,0,.75)";

header.style.boxShadow = "none";

}

});


// =======================
// SMOOTH SCROLL
// =======================

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});


// =======================
// GALLERY ZOOM
// =======================

const images =
document.querySelectorAll(".gallery img");

images.forEach(img => {

img.addEventListener("click", () => {

const overlay =
document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,.9)";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "99999";

const image =
document.createElement("img");

image.src = img.src;
image.style.maxWidth = "90%";
image.style.maxHeight = "90%";
image.style.borderRadius = "20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.addEventListener("click", () => {

overlay.remove();

});

});

});


// =======================
// FADE IN SECTIONS
// =======================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0)";

}

});

});

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform =
"translateY(50px)";
section.style.transition = "1s";

observer.observe(section);

});


// =======================
// COUNTER
// =======================

const counter =
document.getElementById("years");

if(counter){

let count = 0;

const timer =
setInterval(() => {

count++;

counter.textContent = count;

if(count >= 63){

clearInterval(timer);

}

},30);

}


// =======================
// BACK TO TOP BUTTON
// =======================

const btn =
document.createElement("button");

btn.innerHTML = "↑";

btn.style.position = "fixed";
btn.style.left = "20px";
btn.style.bottom = "20px";
btn.style.width = "55px";
btn.style.height = "55px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#d4af37";
btn.style.fontSize = "22px";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.zIndex = "9999";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

btn.style.display = "block";

}else{

btn.style.display = "none";

}

});

btn.addEventListener("click", () => {

window.scrollTo({

top:0,
behavior:"smooth"

});

});


// =======================
// HERO TEXT ANIMATION
// =======================

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

const text =
heroTitle.innerText;

heroTitle.innerText = "";

let i = 0;

const typing =
setInterval(() => {

heroTitle.innerText += text[i];

i++;

if(i >= text.length){

clearInterval(typing);

}

},100);

  }
