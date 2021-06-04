// Varaible: galeria filtrable
const galeryContainer = document.querySelector(".eael-filter-gallery-container")
// Variable: botón retorno
const toReturn = document.querySelector(".p-return")


// Constante: Se guarda la clase para hacer clic
const variableClic= document.querySelector(".eael-cf-p-fitbay")
// Constante: Se guarda la clase para mostrar (imagen)
const variableStyle = document.querySelector(".p-fitbay")

// Evento clic: Ejecuta la función showName
variableClic.onclick = showName

// Función: Aplica nuevos estilos a las clases
function showName ( evento ) {
    variableStyle.style.display = "block" //mostrar proyecto
    galeryContainer.style.display = "none" //ocultar galeria filtrable
}

const branding = document.querySelector(".eael-cf-branding")
const socialMedia = document.querySelector(".eael-cf-social-media")
const audivisual = document.querySelector(".eael-cf-audiovisual")
const web = document.querySelector(".eael-cf-web")

//Colocar despues de todas las Variables (o constantes)
toReturn.onclick = returnToGalery

function returnToGalery ( evento ) {
    galeryContainer.style.display = "block" //mostrar galeria filtrable
    variableClic.style.display = "none" //Ocultar proyectos
}