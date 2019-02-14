/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var CantidadAlambre;
	var LargoTerreno;
	var AnchoTerreno;

	LargoTerreno=Largo.value;
	AnchoTerreno=Ancho.value;

	LargoTerreno=parseInt(LargoTerreno);
	AnchoTerreno=parseInt(AnchoTerreno);

	LargoTerreno=LargoTerreno*2;
	AnchoTerreno=AnchoTerreno*2;

	CantidadAlambre=LargoTerreno+AnchoTerreno;
	CantidadAlambre=CantidadAlambre*3;

	alert("La cantidad de alambre necesario es de "+CantidadAlambre);
}
function Circulo () 
{
	var CantidadAlambre;
	var RadioTerreno;

	RadioTerreno=Radio.value,

	RadioTerreno=parseInt(RadioTerreno);

	CantidadAlambre=2*RadioTerreno*3.14;
	CantidadAlambre=CantidadAlambre*3;

	alert("La cantidad de alambre necesario es de "+CantidadAlambre);
}
function Materiales () 
{
	var AreaTerreno;
	var LargoTerreno;
	var AnchoTerreno;
	var BolsasCemento;
	var BolsasCal;

	LargoTerreno=Largo.value;
	AnchoTerreno=Ancho.value;
	BolsasCemento=2;
	BolsasCal=3;

	LargoTerreno=parseInt(LargoTerreno);
	AnchoTerreno=parseInt(AnchoTerreno);
	BolsasCemento=parseInt(BolsasCemento);
	BolsasCal=parseInt(BolsasCal);

	AreaTerreno=LargoTerreno*AnchoTerreno;

	BolsasCemento=AreaTerreno*BolsasCemento;
	BolsasCal=AreaTerreno*BolsasCal;

	alert("La cantidad de bolsas de cemento necesarias son "+BolsasCemento+" y las de cal "+BolsasCal);
}