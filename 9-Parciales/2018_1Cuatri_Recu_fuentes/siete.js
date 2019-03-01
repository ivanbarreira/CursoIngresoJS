function mostrar()
{
	var velocidad;
	var TipoDeCombustible;
	var contadorvelocidad;
	var contadorCombustible;
	var vehiculos;
	var Promediovelocidad;
	var sumavelocidad;
	var velocidadMin;
	var 

	contadorvelocidad = 0;
	contadorCombustible = 0;
	vehiculos = 0;
	sumavelocidad = 0;
	velocidadMin = 0;
 

	while (vehiculos<5)
	{
		velocidad = prompt ("ingrese la velocidad en kilometros","esciba entre 0 y 250");
		velocidad = parseInt(velocidad);

		while(velocidad<0 || velocidad>250)
		{	
			velocidad = prompt ("esciba solo entre 0 y 250");
			velocidad=parseInt(velocidad);

			++contadorvelocidad;

			if(contadorvelocidad==2)
			{
				break;
			}
		}

		TipoDeCombustible = prompt("ingrese el tipo de combustible","escriba `s´ o `l´");

		while(TipoDeCombustible != "s" && TipoDeCombustible != "l")
		{
			TipoDeCombustible = prompt("escriba solo `s´ o `l´");

			++contadorCombustible;
			
			if(contadorCombustible==2)
			{	
				break;
			}
		}

		sumavelocidad=sumavelocidad+velocidad;


		if(vehiculos==0)
		{
			velocidadMin=velocidad;
		}
		if(velocidad<velocidadMin)
		{
			velocidadMin=velocidad;
		}

		if(TipoDeCombustible=="l" && velocidad>100)
		{
			contadorCombustible++;
		}






		vehiculos++;
	}
	Promediovelocidad=sumavelocidad/vehiculos;
	console.log("promedio "+ Promediovelocidad);
	console.log("velocidad minima: "+velocidadMin);
	console.log("cuantos mayor a 100 " + contadorCombustible);
	
}
