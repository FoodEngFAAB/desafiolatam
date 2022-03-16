
//Cachipún contra la Máquina
//Solicita datos iniciales
alert(`¡¡Bienvenido!! \n¡¡Vamos a jugar al cachipún!! \nPero antes, un par de preguntas...`)

var nombre=prompt("¿Cuál es tu nombre?: ");
var juegos=parseInt(prompt("¿Al mejor de cuántos juegos quieres jugar?"))

if (juegos/juegos!=1) {
    alert(`Bueno ${nombre}, será para una próxima oportunidad.`)
} else {
    //Llama a la función "Cachipún! con dos argumentos"
    cachipun(nombre, juegos)
}

