import { Tarjeta } from "./Tarjeta.js";
import { Zapatillas } from "./Zapatillas.js";

const zapasNuevas= new Zapatillas("Adidas", "negras", "foto", "urbanas");

//una tarjeta con otro objeto (POO)
const nuevaTarjeta = new Tarjeta (
    zapasNuevas.getNombre(),
    zapasNuevas.getColor(),
    zapasNuevas.getFoto(),
    zapasNuevas.getFuncionalidad(),
);

//una tarjeta sin usar otras clases/objeto      
const unaTarjeta = new Tarjeta( "Nike", "blanca y negra", "running");
const otraTarjeta = new Tarjeta( "Puma", "roja", "tenis", "link hacia..");


document.querySelector("#contenedor-cards").innerHTML=`
    <div class="row">
        <div class="col">           
            ${unaTarjeta.generarHtml()}
        </div>  

        <div class="col">           
            ${otraTarjeta.generarHtml()}
        </div>  

    </div>

   
            
`;