const wPresencial = document.getElementById("wPresencial")
wPresencial.onclick = addToCartP

const wOnline = document.getElementById("wOnline")
wOnline.onclick = addToCartO

function addToCartP( evento ) {
    // console.log("Done!")
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
    // console.log("Done!")
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

