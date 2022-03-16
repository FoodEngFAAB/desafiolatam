function cachipun(nombre, juegos) {

    alert(`¡¡Muy bien, comencemos estos ${juegos} juegos!!`)

    //Inicializa contador de juegos válidos
    var contador = 1
    //Contador de juegos ganados por ${nombre}
    var juegosganados = 0
    //Contador de juegos empatados por ${nombre}
    var juegosempatados = 0
    //Contador de juegos perdidos por ${nombre}
    var juegosperdidos = 0

    while (contador <= juegos) {
        alert(`¡Atención!\n\nJuego ${contador} de  ${juegos}.\n\n¡¡CA - CHI - PÚN!!\n`)
        var jugador = parseInt(prompt(`¿Que tienes ${nombre}? ¿piedra (1), papel (2) o tijera (3)?`))

        //Determina validez de la respuesta
        if (jugador >= 1 && jugador <= 3) {

            //Ejecuta la jugada de la máquina
            var maquina = Math.floor(Math.random() * 3 + 1)

            //Compara resultados
            if (maquina == jugador) {
                resultado = "¡¡ Empatamos !!"
                juegosempatados++

            } else {
                if (((maquina == 1) && (jugador == 2)) || ((maquina == 2) && (jugador == 3)) || ((maquina == 3) && (jugador == 1))) {
                    //Incrementa el número de juegos ganados
                    juegosganados++
                    resultado = "¡¡ Ganaste !!"
                } else {
                    resultado = `Lo siento ${nombre}, gané.`
                    juegosperdidos++
                }
            }
            //Convierte resultados numéricos a texto para clarificar el resultado
            switch (maquina) {
                case 1:
                    var maquinatxt = "Piedra"
                    break;
                case 2:
                    var maquinatxt = "Papel"
                    break;
                case 3:
                    var maquinatxt = "Tijera"
                    break;
            }
            switch (jugador) {
                case 1:
                    var jugadortxt = "Piedra"
                    break;
                case 2:
                    var jugadortxt = "Papel"
                    break;
                case 3:
                    var jugadortxt = "Tijera"
                    break;
            }

            //Mensaje al usuario jugador
            alert(`${nombre}, jugaste ${jugadortxt} y yo jugué ${maquinatxt}...\n\n${resultado}.\n\nLlevas ${juegosganados} de ${juegos} ganados.`)

            //Actualiza el contador
            contador++
        } else {
            //Usuario no ha ingresado un valor numérico y se envía mensaje de alerta y repite la pregunta
            alert(`${nombre}, debes decirme si tienes piedra (1), papel (2) o tijera (3). Ingresa el número indicado entre paréntesis`)
        }
    }

    // Reporta resultados
    if (juegosganados < juegosperdidos) {
        alert(`Lo siento ${nombre}!!.\n\nGanaste ${juegosganados} de ${juegos}\n\nAunque hayas perdido, fue un gusto haber jugado contigo!!\n\n¡¡Hasta la próxima!!`)
    } else {
        if (juegosganados > juegosperdidos) {
            alert(`¡¡Imbatible ${nombre}!!.\n\nGanaste ${juegosganados} de ${juegos}\n\n¡¡Un gusto haber jugado contigo!!\n\n¡¡Hasta la próxima!!`)
        } else {
            alert(`¡¡Wow, casi, casi ${nombre}!!.\n\nEs un empate. Ganaste ${juegosganados} de ${juegos}\n\n¡¡Un gusto haber jugado contigo!!\n\n¡¡Hasta la próxima!!`)
        }
    }
}
