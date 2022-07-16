function stars() {
  let count = 100;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerHeight);
    let y = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random();
    let size = Math.random() * 2; /* x2 pour le défilement soit fluide */

    star.style.left = x * 2.5 + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = duration + "s";
    scene.appendChild(star);
    i++;
  }
}

function appear() {
  myID = document.getElementById("myID");

  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 650) {
      myID.className = "show";
    } else {
      myID.className = "hide";
    }
  };

  window.addEventListener("scroll", myScrollFunc);
}

function activeMenu() {
  var myId = document.querySelector('nav');
  const navDisplay = myId.style.display; 
 if (navDisplay === "block") {
  myId.style.display = "none";
  console.log(myId.style.display);
 }
 else {
  myId.style.display = "block";
    console.log(myId.style.display);
 }
  
}
/*
function mooveScroll() {
  let astro = document.getElementById("astronaute");
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    astro.style.right = value + "px";
  });
}
*/
/* calls functions */
stars();
appear();
//mooveScroll();
