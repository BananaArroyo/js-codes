// Constante: galeria filtrable
const galeryContainer = document.querySelector(".eael-filter-gallery-container")

// Constante: botón retorno
const toReturn = document.querySelector(".p-return")

// ************ SOFIA RONQUILLO **********
// Constantes: elemento para evento clic
const pSofiaEvent = document.querySelector(".eael-cf-p-sofia")
// Constantes: elemento para aplicar estilos (none/block)
const pSofiaStyle = document.querySelector(".p-sofia")

//Event: mostrar proyecto al hacer clic
pSofiaEvent.onclick = showSofia // Ejecutar función

// Función
function showSofia ( evento ) {
    pSofiaStyle.style.display = "block" //mostrar proyecto
    galeryContainer.style.display = "none" //ocultar galeria filtrable
    toReturn.style.display = "block"        //mostrar felcha retorno
}

// ************ FITBAY **********
// Constantes: elemento para evento clic
const pFitbayEvent = document.querySelector(".eael-cf-p-fitbay")
// Constantes: elemento para aplicar estilos (none/block)
const pFitbayStyle = document.querySelector(".p-fitbay")

//Event: mostrar proyecto al hacer clic
pFitbayEvent.onclick = showFitbay // Ejecutar función

// Función
function showFitbay ( evento ) {
    pFitbayStyle.style.display = "block" //mostrar proyecto
    galeryContainer.style.display = "none" //ocultar galeria filtrable
    toReturn.style.display = "block"        //mostrar felcha retorno
}

// ************ TEMOC **********
// Constantes: elemento para evento clic
const pTemocEvent = document.querySelector(".eael-cf-p-temoc")
// Constantes: elemento para aplicar estilos (none/block)
const pTemocStyle = document.querySelector(".p-temoc")

//Event: mostrar proyecto al hacer clic
pTemocEvent.onclick = showTemoc // Ejecutar función

// Función
function showTemoc ( evento ) {
    pTemocStyle.style.display = "block"     //mostrar proyecto
    galeryContainer.style.display = "none"  //ocultar galeria filtrable
    toReturn.style.display = "block"        //mostrar felcha retorno
}

//Colocarlo al FINAL
toReturn.onclick = returnToGalery // Ejecutar función

// Función
function returnToGalery ( evento ) {
    galeryContainer.style.display = "block" //mostrar galeria filtrable
    //Ocultar proyectos
    pSofiaStyle.style.display = "none"
    pFitbayStyle.style.display = "none"
    pTemocStyle.style.display = "none"
    toReturn.style.display = "none"
}