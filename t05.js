
let pregunta = prompt('ingrese cual operacion desea hacer');
let num1 = parseInt(prompt('ingresa el primer numero'));
let num2 = parseInt(prompt('ingresa el segundo numero'));


if(pregunta == "suma"){
    let resultado = 0;
    function suma(){
        resultado = num1 + num2;
        console.log(`el resultado de sumar ${num1} + ${num2} = ${resultado}`);
    } 
    suma();

}else if(pregunta == 'resta'){
    let resultado = 0;
    function resta(){
        resultado = num1 - num2;
        console.log(`el resultado de restar ${num1} - ${num2} = ${resultado}`)
    }
    resta();

}else if (pregunta == 'multiplicacion'){
    let resultado = 0;
    function multiplicacion(){
        resultado = num1 * num2;
        console.log(`el resultado de multiplicar ${num1} x ${num2} = ${resultado}`)
    }
    multiplicacion();

}else if(pregunta == 'division'){
    let resultado = 0;
    function division (){
        resultado = num1/num2;
        console.log(`el resultado de dividir ${num1} / ${num2} = ${resultado}`)
    }
    division();
}

