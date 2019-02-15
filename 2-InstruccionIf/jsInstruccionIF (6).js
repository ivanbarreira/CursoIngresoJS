function mostrar()
{
//tomo la edad  
	var Edad;

	Edad=document.getElementById('edad').value;

	if(Edad<13){
		alert("Usted es menor de edad");
	}else{ 
		if(Edad>17){
			alert("Usted es mayor de edad");
		}else{
		alert("Usted es un adolescente");
	}}


}//FIN DE LA FUNCIÓN