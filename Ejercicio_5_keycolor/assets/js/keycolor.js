// Crea una página junto a un script que guarde dentro de una variable global
// un color dependiendo de la letra del teclado presionada. (2 Puntos).
    // ○ La letra a guardará el color rosado.
    // ○ La letra s guardará el color naranjo.
    // ○ La letra d guardará el color celeste.
    // ○ Para guardar el color revisa el tip al final del enunciado.
    // ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
    // color blanco y borde negro.
    // ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
    // “key” a rosado, naranjo o celeste respectivamente.
const newBox = document.querySelector("container");
let color = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        return key.style.background = "pink";
    } else if (event.key === 's') {
        return key.style.background = "orange";
    } else if (event.key === 'd') {
        return key.style.background = "skyblue";
    }     
    });

// Sólo pude llegar hasta este punto, no pude crear las nuevas cajas con color púrpura, gris y café.
// Recepciono mi evaluación según desempeño, pero continuaré practicando para generar la última parte del ejercicio.

// Le había escrito por Slack, profesora, por asuntos familiares no pude realizar el desafío antes y con más anticipación.
