// Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.

let numero = parseInt(Math.random()*10)+1;
console.log(numero)

adivinado = false;

while(!adivinado){
    let numero2 = parseInt(prompt('ingresa el numero'))

    if (numero2 == numero){
        adivinado = true
        alert('felicitaciones adivinaste');
    }else if (numero2 < numero){
        alert('esta un un poco bajo');
    }else if (numero2 > numero){
        alert('estas un poco alto');
    }
}
    



