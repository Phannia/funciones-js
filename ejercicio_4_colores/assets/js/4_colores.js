// Dentro del script agrega el evento para que al hacer click a cada uno de los
// divs, este cambie de color al color negro. Utiliza addEventListener para
// agregar el evento. (1 Punto)

const color = document.getElementById("boxescontainer");

color.addEventListener("click", (e) => {

    if (e.target && e.target.className == "colorbox") {
        if (e.target.style.background == "black") {
            e.target.style.background = e.target.style.color;
        } else {
            e.target.style.background = "black";
        }
    }
});

