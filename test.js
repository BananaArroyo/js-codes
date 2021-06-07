const animation = document.querySelector('.custom-logo');
        const page = document.querySelector('.page-id-6');
        
        function changeImg(animation, page){
            if (page){
                console.log("True");
animation.src="https://puntoambar.com/PuntoAmbarwhite.png";
            }
        }

changeImg(animation, page);


//PROJECT EVENTS
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

// Add to card Workshops 
const wPresencial = document.querySelector(".wPresencial")
wPresencial.onclick = addToCartP

const wOnline = document.querySelector(".wOnline")
wOnline.onclick = addToCartO

function addToCartP( evento ) {
    console.log("Done P!")
    const getWorkshopP = document.getElementById("workshopPresencial").value;
    // console.log( getWorkshopP )
    switch ( getWorkshopP ) {
        case "1":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2566");
            break;
        case "2":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2665")
            break;
        case "3":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2666");
            break;
        case "4":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2668");
            break;
        case 5:
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2669");
            break;
        case "6":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2670");
            break;
        case "7":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2671");
            break;
        case "8":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2673");
            break;
        case "9":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2674");
            break;
        case "10":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2677");
            break;
        case "11":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2679");
            break;
        case "12":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2680");
            break;
        case "13":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2681");
            break;
        case "14":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2682");
            break;
        default:
            console.log("Pick other workshop");
            break;
    }
}

function addToCartO( evento ) {
    console.log("Done O!")
    const getWorkshopO = document.getElementById("workshopOnline").value;
    // console.log(getWorkshopO)
    switch ( getWorkshopO ) {
        case "15":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2683");
            break;
        case "16":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2684");
            break;
        case "17":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2685");
            break;
        case "18":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2686");
            break;
        case "19":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2687");
            break;
        case "20":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2688");
            break;
        case "21":
            window.location.replace("https://puntoambar.com/carrito/?add-to-cart=2689");
            break;
        default:
            console.log("Pick other workshop");
            break;
    }
}

