function mostrar()
{
//tomo la edad  
	var Edad;
	var EstadoCivil;

	Edad=document.getElementById('edad').value;
	EstadoCivil=document.getElementById('estadoCivil').value;
	
	if(Edad<18&&EstadoCivil!="Soltero"){
		alert("Es muy pequeño para NO ser soltero")
	};
	


}//FIN DE LA FUNCIÓN