// Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript).
let saludo = "hola mundo";

function reverse (){
    let mensaje = "";
    for(let i = saludo.length - 1; i >= 0; i--){
        mensaje = mensaje + saludo[i];
    }
    console.log(mensaje);
}
reverse();