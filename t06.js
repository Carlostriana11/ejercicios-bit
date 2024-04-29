// Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.

let nombreCompleto = prompt('escribe tu nombre completo');

function contarCaracteres(){
    let nombre = [];
    for(let i = 0; i < nombreCompleto.length; i++){
        if(nombreCompleto[i] != " "){
            nombre.push(nombre[i]);
        }
    }
    
    console.log(`tu nombre tiene ${nombre.length} caracteres`);
}

contarCaracteres();


// carlos andres triana tumay
// 123456  789101112 131415161718 19202122,23