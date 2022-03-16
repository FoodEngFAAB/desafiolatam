
//Cachipún contra la Máquina
//Solicita datos iniciales
alert(`¡¡Bienvenido!! \n¡¡Vamos a jugar al cachipún!! \nPero antes, un par de preguntas...`)

var nombre=prompt("¿Cuál es tu nombre?: ");
var juegos=parseInt(prompt(`¿Al mejor de cuántos juegos quieres jugar ${nombre}?`))
if (juegos>=1) {
    //Llama a la función "Cachipún! con dos argumentos: Nombre del participante y la cantidad de juegos que desea jugar."
    cachipun(nombre, juegos)
} else {
    alert(`Bueno ${nombre}, parece que no quieres jugar.\nSerá para una próxima oportunidad.\n¡¡Hasta la próxima!!`)
}

