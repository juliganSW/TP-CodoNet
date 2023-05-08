//pequeño script que desplaza la barra de navegacion hacia arriba al hacer scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}