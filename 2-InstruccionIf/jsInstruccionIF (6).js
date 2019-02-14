function mostrar()
{
//tomo la edad  
	var Edad;

	Edad=document.getElementById('edad').value;

	if(Edad>=18){
		alert("Usted es mayor de edad")
	};
	if(Edad>=13&&Edad<=17){
		alert("Usted es adolescente")
	};
	if(Edad<13){
		alert("Usted es menor de edad")
	};


}//FIN DE LA FUNCIÓN