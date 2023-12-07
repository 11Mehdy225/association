//variables globales
let compteur = 0; //compteur qui permet de connaitre l'image affiché
let timer , elements , slides, slidesWidth; 


//charger le dom
window.onload = () => {



//recuperer le diapo
var diapo = document.querySelector(".diapo");

//recupere les elements
elements = document.querySelector(".elements");
console.log(elements);

//on clone la premiere image pour qu'on puisse revenir a elle a la fin 
let firstImage = elements.firstElementChild.cloneNode(true)

//on injecte le clone a la fin du diapo 
elements.appendChild(firstImage);

slides = Array.from(elements.children);
console.log(slides);

//on recupere la largeur d'une slide
slidesWidth = diapo.getBoundingClientRect().width;

//on recupere les fleches pour leur attribuer leurs fonction
let next = document.querySelector("#nav-droite");
let prev = document.querySelector("#nav-gauche");
//on gere le clic 
next.addEventListener("click",slideNext);
prev.addEventListener("click",slidePrev);

//on automatise le defilement 
timer=setInterval(slideNext,5000);

//une fonction qui fait defiler les elements

function slideNext(){ //fait defiler a droite
    //incrementer le compteur
    compteur++;
    //transition des elements
    elements.style.transition="1s linear";

    let decal = -slidesWidth * compteur ;
    elements.style.transform = `translateX(${decal}px)`;


      //on attend la fin pour rembobiner
 setTimeout(function() {
     if (compteur >= slides.length - 1) {
        compteur = 0 ;
        //on enleve la transition et on revient à 0
        elements.style.transition = "unset";
        elements.style.transform = "translateX(0)";
      }
   },2000);
}

function slidePrev () { //fait defiler a gauche
    //on decremente le compteur 
    compteur--;
    elements.style.transition="1s linear";

    if (compteur < 0) {
        compteur = slides.length -1 ;
        let decal = -slidesWidth * compteur ;
        elements.style.transition ="unset" ;
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev,1);
    }
    
    let decal = -slidesWidth * compteur ;
    elements.style.transform = `translateX(${decal}px)`;
    }

  //notre menu avec la page reduite
  const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

//leffet de background qui change au defilement de la page
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var logo = document.querySelector('nav img');
  var scrollPosition = window.scrollY;
  console.log(nav);
  console.log(scrollPosition);


  if (scrollPosition > 0) {
    nav.style.backgroundColor = 'rgb(83, 5, 83)';
    nav.style.transition = 'background-color 0.5s ease';
    logo.style.width = '100px';
    logo.style.height = '100px';
    logo.style.transition = 'width 0.5s ease';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.transition = 'background-color 0.5s ease';
    logo.style.width = '300px';
    logo.style.height = '250px';
    logo.style.transition = 'width 0.5s ease';
  }
});
}