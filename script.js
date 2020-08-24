// Fonctionnalité 1 et 1bis:
let footerClick = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerClick ++;
	 console.log(`Click ${footerClick}`);
});

//Fonctionnalité 2 :
// 'élément HTML portant l'Id navbarHeader perde sa classe collapse

let navbar = document.getElementById("navbarHeader");
let hamburger = document.querySelector("span.navbar-toggler-icon")
function Collapse() {
  navbar.classList.toggle("collapse");
};

hamburger.addEventListener("click",Collapse);


//Fonctionnalité 3 :
let btnEditElmt = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[0];

btnEditElmt.addEventListener('click', function() {
  btnEditElmt.style.color = 'red';
});


//Fonctionnalité 4 :

var second_edit_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var onMouseClickSecondEdit = function () {
    var x = document.getElementsByClassName("card-text")[1];
    if (x.style[0] === "color") {
        x.style = " "}
        else {
        x.style = "color : Green";}
    }
second_edit_button.addEventListener("click", onMouseClickSecondEdit, false);

//Fonctionnalité 5 :
