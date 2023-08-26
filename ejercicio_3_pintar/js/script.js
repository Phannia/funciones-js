// 3.2. Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función (1 Punto).
// Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
// funcionando en conjunto con el código modificado.


// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

const element = document.getElementById("ele1");

function pintar(htmlElement, color = "green") {
    if(htmlElement.style.backgroundColor != color){
        htmlElement.style.backgroundColor = color;
    }
    else {
        htmlElement.style.backgroundColor = "green";
    }
}

element.addEventListener("click", (e) => {
    pintar(e.target, "yellow");
});