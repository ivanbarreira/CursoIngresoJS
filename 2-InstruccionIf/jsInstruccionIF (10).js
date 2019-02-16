function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var Nota;
	var mensaje;

	Nota=Math.floor(Math.random() * 10) +1;

	if(Nota>8)
	{
		mensaje=" EXCELENTE";
	}
	else
	{
		if(Nota>3)
		{
			mensaje=" APROBO";
		}
		else
		{
			mensaje=" Vamos, la proxima se puede";
		}
	}
	
	alert("su nota es "+ Nota +":"+ mensaje);

}//FIN DE LA FUNCIÓN