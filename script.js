// Fonctionnalité 1 et 1bis:
let footerEl = document.querySelector("footer");
let x = 0;

function consolePrint() {
    x++;
    console.log(`clic numero ${x}`);
}

if (footerEl) {
    footerEl.addEventListener("click", consolePrint);
}

//Fonctionnalité 2 :
// 'élément HTML portant l'Id navbarHeader perde sa classe collapse

let navbarEl = document.getElementById("navbarHeader");
let hamburgerEl = document.querySelector("span.navbar-toggler-icon")

function menuToogle() {
  navbarEl.classList.toggle("collapse");
};

if (navbarEl) {
    hamburgerEl.addEventListener("click", menuToogle);
}

//Fonctionnalité 3 :
let cardEl = document.getElementsByClassName("col-md-4")[0];
let editEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let textEl = document.getElementsByClassName("card-text")[0];

console.log(cardEl);
console.log(editEl);
console.log(textEl);

function changeColor(){
    textEl.style.color = "red";
}

if (editEl){
    editEl.addEventListener("click", changeColor);
}


//Fonctionnalité 4 :

var secondEditButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

var onMouseClickSecondEdit = function () {
  var x = document.getElementsByClassName("card-text")[1];
  if (x.style[0] === "color") {
    x.style = " "}
  else {
    x.style = "color : Green";} 
}

secondEditButton.addEventListener("click", onMouseClickSecondEdit, false);

//Fonctionnalité 5 :
let styleLinkEl = document.querySelector("link");
let headerEl = document.querySelector("header");
console.log(styleLinkEl);
console.log(headerEl);

let index = 0;

function doubleClic() {
    if (index == 2){
        styleLinkEl.disabled = true;
    }
    else if (index == 4){
        styleLinkEl.disabled = false;
        index = 0;
    }
    index++;
}

if (headerEl){
    headerEl.addEventListener("click", doubleClic);
}
