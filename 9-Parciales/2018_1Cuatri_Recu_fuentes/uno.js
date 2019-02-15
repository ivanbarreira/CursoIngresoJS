
function mostrar()
{
	var Nombre1
	var Nombre2
	var Peso1
	var Peso2
	var Suma

	Nombre1=Prompt("Ingresa el nombre de tu primera mascota","escriba aca");
	Nombre2=Prompt("Ingresa el nombre de tu segunda mascota","escribi aca");
	Peso1=Prompt("Ingresa el peso de "+Nombre1+" en kilos","escribi aqui");
	Peso2=Prompt("Ingresa el peso de "+Nombre2+"en kilos","esbribi aca")

	Peso1=parseInt(Peso1);
	Peso2=parseInt(Peso2);

	Suma=Peso1+Peso2;

	alert("tenes dos mascotas "+Nombre1+" y "+Nombre2+" que pesan "+Peso1+" y "+Peso2+" kilos, la suma de los kilos es "+Suma);
}
