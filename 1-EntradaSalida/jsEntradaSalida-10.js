/*
Leandro Colisko
División G

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe * 25 / 100;

	resultado = importe - descuento
	resultado = parseInt(resultado);

	document.getElementById("txtIdResultado").value = resultado;

}
