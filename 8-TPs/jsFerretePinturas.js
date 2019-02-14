/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var TemperaturaF;
	var TemperaturaC;

	TemperaturaF=document.getElementById('Temperatura').value;
	TemperaturaC=TemperaturaF-32;
	TemperaturaC=TemperaturaC*5/9;

	alert(TemperaturaF+" Fahrenheit son "+TemperaturaC+"Centigrados");

}

function CentigradosFahrenheit () 
{
	var TemperaturaC;
	var TemperaturaF;

	TemperaturaC=document.getElementById('Temperatura').value;
	TemperaturaF=TemperaturaC*9/5+32;

	alert(TemperaturaC+" Centigrados son "+TemperaturaF+" Fahrenheit");

}
