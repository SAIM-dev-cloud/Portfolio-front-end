// ===========================
// NAV ACTIVE LINKS
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){
link.classList.add("active");
}

});

});


// ===========================
// STICKY HEADER
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background=
"rgba(0,0,0,.8)";

header.style.backdropFilter=
"blur(10px)";

}
else{

header.style.background=
"transparent";

}

});


// ===========================
// TYPING EFFECT
// ===========================

const words=[
"AI Engineer",
"Web Developer",
"Creator",
"YouTuber",
"Future Billionaire"
];

const target=
document.querySelector(".typing span");

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

const currentWord=words[wordIndex];

if(!deleting){

target.textContent=
currentWord.substring(
0,
charIndex+1
);

charIndex++;

if(charIndex===currentWord.length){

deleting=true;

setTimeout(type,1500);

return;

}

}

else{

target.textContent=
currentWord.substring(
0,
charIndex-1
);

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex=
(wordIndex+1)%words.length;

}

}

setTimeout(
type,
deleting?70:120
);

}

type();


// ===========================
// BUTTON ANIMATION
// ===========================

document
.querySelectorAll(".btn")
.forEach(button=>{

button.addEventListener(
"click",
()=>{

button.style.transform=
"scale(.95)";

setTimeout(()=>{

button.style.transform=
"scale(1)";

},150);

});

});


// ===========================
// REVEAL ON SCROLL
// ===========================

const observer=
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},
{
threshold:.2
}
);

document
.querySelectorAll(
".content,.hero-image"
)
.forEach(el=>{

el.classList.add(
"hidden"
);

observer.observe(el);

});