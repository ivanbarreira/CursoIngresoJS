function mostrar()
{
//tomo la edad  
var mesDelAño;
var Mensaje;

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":
		Mensaje="que comiences bien el año!!!.";
	break;

	case "Marzo":
		Mensaje="a clases!!!.";
    break;
 
	case "Julio":
		Mensaje="se vienen las vacaciones!!!.";
	break;

	case "Diciembre":
 		Mensaje="Felices fiesta!!!.";
	break;

	default:
		Mensaje="Buena suerte";
	break;
}
alert(Mensaje);

}//FIN DE LA FUNCIÓN