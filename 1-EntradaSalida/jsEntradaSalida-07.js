/*
Leandro Colisko
División G
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno + numeroDos;
	alert("Es resultado de la suma es: " + resultado);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);	
	resultado = numeroUno - numeroDos;
	alert("Es resultado de la resta es: " + resultado);
}

function multiplicar()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);	
	resultado = numeroUno * numeroDos;
	alert("Es resultado de la multiplicación es: " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);	
	resultado = numeroUno / numeroDos;
	alert("Es resultado de la división es: " + resultado);
}

