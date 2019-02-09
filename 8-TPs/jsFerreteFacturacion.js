/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrimerPrecio;
	var SegundoPrecio;
	var TercerPrecio;
	var Suma;

	PrimerPrecio=PrecioUno.value;
	SegundoPrecio=PrecioDos.value;
	TercerPrecio=PrecioTres.value;

	PrimerPrecio=parseInt(PrimerPrecio);
	SegundoPrecio=parseInt(SegundoPrecio);
	TercerPrecio=parseInt(TercerPrecio);

	Suma=PrimerPrecio+SegundoPrecio+TercerPrecio;

	alert(Suma);
}
function Promedio () 
{
	var PrimerPrecio;
	var SegundoPrecio;
	var TercerPrecio;
	var Suma;
	var Promedio;

	PrimerPrecio=PrecioUno.value;
	SegundoPrecio=PrecioDos.value;
	TercerPrecio=PrecioTres.value;

	PrimerPrecio=parseInt(PrimerPrecio);
	SegundoPrecio=parseInt(SegundoPrecio);
	TercerPrecio=parseInt(TercerPrecio);

	Suma=PrimerPrecio+SegundoPrecio+TercerPrecio;
	Promedio=Suma/3;

	alert(Promedio);
}
function PrecioFinal () 
{
	var PrimerPrecio;
	var SegundoPrecio;
	var TercerPrecio;
	var Suma;
	var IVA;
	var PrecioFinal;

	PrimerPrecio=PrecioUno.value;
	SegundoPrecio=PrecioDos.value;
	TercerPrecio=PrecioTres.value;

	PrimerPrecio=parseInt(PrimerPrecio);
	SegundoPrecio=parseInt(SegundoPrecio);
	TercerPrecio=parseInt(TercerPrecio);

	Suma=PrimerPrecio+SegundoPrecio+TercerPrecio;
	IVA=21/100;
	PrecioFinal=suma+IVA;

	alert(Preciofinal);
}