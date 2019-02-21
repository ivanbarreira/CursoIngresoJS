function mostrar()
{
//tomo la edad  
var mesDelAño;
var Mensaje;

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
		Mensaje="Este mes no tiene mas de 29 dias.";
	break;

	default:
		Mensaje="Este mes tiene 30 o mas dias";
	break;
}
	
alert(Mensaje);

}//FIN DE LA FUNCIÓN