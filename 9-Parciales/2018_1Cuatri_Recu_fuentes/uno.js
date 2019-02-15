
function mostrar()
{
	var Nombre1
	var Nombre2
	var Peso1
	var Peso2
	var Suma

	Nombre1=prompt("Ingresa el nombre de tu primera mascota","escriba aca");
	Nombre2=prompt("Ingresa el nombre de tu segunda mascota","escribi aca");
	Peso1=prompt("Ingresa el peso de la primera mascota en kilos","escribi aqui");
	Peso2=prompt("Ingresa el peso de la segunda masscota en kilos","esbribi aca")

	Peso1=parseInt(Peso1);
	Peso2=parseInt(Peso2);

	Suma=Peso1+Peso2;

	alert("tenes dos mascotas "+Nombre1+" y "+Nombre2+" que pesan "+Peso1+" y "+Peso2+" kilos, la suma de los kilos es "+Suma);
}
