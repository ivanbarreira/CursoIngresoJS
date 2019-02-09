/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var PrimerNumero;
	var SegundoNumero;
	var Resta;

	PrimerNumero=numeroUno.value;
	SegundoNumero=numeroDos.value;

	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);

	Resta=PrimerNumero-SegundoNumero;

	alert("la resta es "+Resta);

}

function multiplicar()
{ 
	var PrimerNumero;
	var SegundoNumero;
	var Multiplicacion;

	PrimerNumero=numeroUno.value;
	SegundoNumero=numeroDos.value;

	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);

	Multiplicacion=PrimerNumero*SegundoNumero;

	alert("el producto es "+Multiplicacion);

}

function dividir()
{
	var PrimerNumero;
	var SegundoNumero;
	var Division;

	PrimerNumero=numeroUno.value;
	SegundoNumero=numeroDos.value;

	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);

	Division=PrimerNumero/SegundoNumero;

	alert("el cociente es "+Division);
}

