function mostrar()
{
	var contador;
	var sexo;

	sexo = prompt("ingrese f ó m .");
	contador = 0;

	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("ingrese f ó m .");

		++contador;
		
		if(contador==3)
		{
			break;
		}
	}
	
	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN