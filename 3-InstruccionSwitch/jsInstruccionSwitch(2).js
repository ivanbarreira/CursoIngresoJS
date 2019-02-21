function mostrar()
{
//tomo la edad  
var mesDelAño;
var Mensaje;

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Julio":
	case "Agosto":
		Mensaje="Abrigate que hace frio.";
	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		Mensaje="Ya pasamos el frio, ahora calor!!!.";
	break;

	default:
		Mensaje="Falta para el invierno.";
	break;
}

alert(Mensaje);

}//FIN DE LA FUNCIÓN