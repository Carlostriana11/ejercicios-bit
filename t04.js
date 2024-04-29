

// let numero = parseInt(prompt('ingresa un numero'))

let n = parseInt(prompt('ingrese un numero'))

console.log(`el factorial de ${n}`)

function factorial (){
    let _factorial = n;
    
    while(--n){
        _factorial *= n
        
    }
    
    console.log(`es ${_factorial}`);
}

factorial()

