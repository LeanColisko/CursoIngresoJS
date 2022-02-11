/*
Leandro Colisko
DIVISIÓN G
4.	Para el departamento de iluminación:

Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento 
    del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
    se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz"  el descuento 
    es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % 
    y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120
    se debe sumar un 10% de ingresos brutos en informar 
    del impuesto con el siguiente mensaje:
    "Usted pago X de IIBB.", siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
 	//definicion de variables
    let cantidadLamparas;
    let marcaLamparas;
    let precioParcial;
    let impuesto_ibb;
    let mensaje;
    let precioPorUnidad;
    let descuento;

    // inicializar
    mensaje = "Usted pago un total de: ";
    precioPorUnidad = 35;

    //ingreso de datos
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marcaLamparas = document.getElementById("Marca").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    descuento = 0;
    precioParcial = cantidadLamparas * precioPorUnidad;

    if (cantidadLamparas < 6) {

        // cambio el precioFinal de acuerdo al descuento
        switch (cantidadLamparas) {
            case 5:
                if(marcaLamparas=="ArgentinaLuz"){
                    descuento = 0.4;
                } else{
                    descuento = 0.3;
                }
                break;
            case 4:
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas") {
                    descuento = 0.25;
                } else{
                    descuento = 0.2;
                }
                break;
            case 3:
                if (marcaLamparas=="ArgentinaLuz") {
                    descuento = 0.15;
                } else {
                    if (marcaLamparas=="FelipeLamparas") {
                        descuento = 0.1;
                    } else {
                        descuento = 0.05;    
                    }
                }
                break;
            default:
                break;
                 //Cierre de Switch
        }
    } else {
        descuento = 0.5;
    }
    
    precioFinal = precioParcial - (precioParcial * descuento);

    if (precioFinal > 120) {
        impuesto_ibb = precioFinal * 0.1;
        precioFinal += impuesto_ibb;
        mensaje += "" + precioFinal + " Usted pago " + impuesto_ibb + " de IIBB.";
    } else{
        mensaje += "" + precioFinal;
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    alert(mensaje);

}
