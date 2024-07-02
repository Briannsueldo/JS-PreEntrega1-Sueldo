
let verificacion = function () {

    let vidas = parseInt(prompt("Con cuantas vidas quieres jugar? (menos de 25) : "));

    if (isNaN(vidas)) {

        alert("Elija una numero valido")

        return verificacion();
    } else if (vidas >= 25) {
        
        alert("Elija un numero menor de intentos");

        return verificacion();
    } else {
        adivinarNumero(vidas);
    }
}

let adivinarNumero = function (vidas) {

    let numeroRandom = parseInt((Math.random()*100)+1);

    let contadorIntentos = 1;

    while (contadorIntentos <= vidas) {

        contadorIntentos++;

        let intentos = parseInt(prompt("Cual es el numero random? : "));

        let probabilidad = (((1 - ((99/100) ** contadorIntentos))) * 100).toFixed(2)
        
        if (isNaN(intentos)) {
            alert("introduzca un valor valido");
            contadorIntentos--;
            intentos;

        } else if (intentos < numeroRandom) {
            alert("El numero es mayor");
            intentos;
        } else if (intentos > numeroRandom) {
            alert("El numero es menor");
            intentos;
        } else {
            alert(`Acertaste en ${contadorIntentos} intentos, la probabilidad de esto es ${probabilidad}!`);
            continuarJuego();
            break;
        }
    }

    if (contadorIntentos > vidas) {
        alert(`Alcanzaste el numero de intentos -> ${vidas}`);

        continuarJuego();
    }
};

let continuarJuego = function () {
    
    let continuar = parseInt(prompt("Quieres seguir jugando? 1-Si / 2-No"));

    if (continuar === 1) {
        return verificacion();
    } else if (continuar === 2) {
        window.location.href = 'https://github.com/Briannsueldo';
    } else {
        alert("Selecciona una opcion valida");
        return continuarJuego();
    }
}

verificacion();
