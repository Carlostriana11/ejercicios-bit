// Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.
function  vocalesN (string){
    let letras = string.split("");
    // console.log(letras)
    return contar(letras)
}
function contar(arrays){
    let vocales = arrays.filter(letra => ['a','e','i','o','u'].includes(letra.toLowerCase()));
    console.log( `las vocales que contiene son ${vocales.length}`)
}



vocalesN('CARLOS ES EL MEJOR DE TODOS');




