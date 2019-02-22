/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	 numeroSecreto=Math.floor(Math.random() * 100) + 1;

	console.log("numero secreto: "+numeroSecreto);

	contadorIntentos=0;
	

}

function verificar()
{
	var numeroIngresado;
	var mensaje;

	numeroIngresado= numero.value;

	console.log(numeroIngresado);

	contadorIntentos=contadorIntentos+1

	if(numeroIngresado==numeroSecreto)
	{
		if(contadorIntentos>5)
		{
			mensaje="falta técnica";
		}
		else
		{
			if(contadorIntentos==1)
			{
				mensaje="usted es un Psíquico";
			}
			else
			{
				if(contadorIntentos==2)
				{
					mensaje="excelente percepción";
				}
				else
				{
					if(contadorIntentos==3)
					{
						mensaje="Esto es suerte";
					}
					else
					{
						if(contadorIntentos==4)
						{
							mensaje="Excelente técnica";
						}
						else
						{
							if(contadorIntentos==5)
							{
								mensaje="usted está en la media";
							}
							else
							{
								if(contadorIntentos>10)
								{
									mensaje="afortunado en el amor";
								}
							}	
						}	
					}
				}		
			}
		}
	}
	else
	{
		if(numeroIngresado>numeroSecreto)
		{
			mensaje="te pasaste";
		}
		else
		{
			mensaje="te falta";
		}
	}

	intentos.value=contadorIntentos;
	
	alert(mensaje);
}