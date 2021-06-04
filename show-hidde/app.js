
const elemento1 = document.querySelector(".elemento1")
const elemento2 = document.querySelector(".elemento2")
const elemento3 = document.querySelector(".elemento3")

elemento1.onclick = ocultarElemento // Agrega función onclick al elemento
elemento2.onclick = mostrarElemento // Agrega función onclick al elemento
elemento3.onclick = saluda // Agrega función onclick al elemento
    
function ocultarElemento( evento ) {
    console.log("Ocultar")
    // elemento3.style.backgroundColor = "black";
    elemento3.style.display = "none";
}

function mostrarElemento( evento ) {
    console.log("Mostrar Elemento")
    // elemento3.style.backgroundColor = "red";
    elemento3.style.display = "block";
}

function saluda( evento ) {
    console.log("Click me more! :3")
}
