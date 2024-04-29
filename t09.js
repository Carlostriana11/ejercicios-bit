// Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.
let lista = [];
function numerosAleatorios (){
    let campo = 10;
    for(let i = 0; i < campo; i++){
        let aleatorio = parseInt(Math.random()*10);
        lista.push(aleatorio);
    }
    console.log(lista);
}
numerosAleatorios();

function eliminarP( numero){
    return numero.filter( n => n %2 == 1);
}
const numerosI = eliminarP(lista);

console.log(numerosI)

eliminarP()
