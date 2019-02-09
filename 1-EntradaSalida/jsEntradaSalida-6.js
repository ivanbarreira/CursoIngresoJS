/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var PrimerNumero;
	var SegundoNumero;
	var Suma;

	PrimerNumero=numeroUno.value;
	SegundoNumero=numeroDos.value;

	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);

	Suma=PrimerNumero+SegundoNumero;

	alert("la suma es "+Suma);
	
}

