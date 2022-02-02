/*
Leandro Colisko
División G

Debemos lograr tomar el importe por ID,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	
	resultado = sueldo * 1.1;
	resultado = parseInt(resultado);
	
	document.getElementById("txtIdResultado").value = resultado;
}
