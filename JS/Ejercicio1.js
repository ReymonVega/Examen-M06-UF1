function coloret() {
    /*Hacer condicion y luego no olvidar el else*/
    if (document.getElementById("pulsame").style.backgroundColor == "white") {
        document.getElementById("pulsame").style.backgroundColor = "red";
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    }
    else {
        document.getElementById("pulsame").style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    }
}

/*Ejercicio 3*/ 

function multi() {
    let numero = parseInt(document.getElementById("cuadroMulti").value);
    /*asignamos numeroa a la variablea*/
    let a = numero;
    let multiplica = 1;
    let imprime = ""
    for (a; a > 1; a--) {
        imprime += a + " * ";
        multiplica = multiplica * a;
    }
    imprime += "1 = " + multiplica;
    console.log(imprime);
    
}

/* EJERCICIO 4*/

function mediaImpares(numeros) {
    let totalNum = 0;
    /*contador*/
    let x = 0;
    /*for para recorrer el valor de la funcion*/
    for(let n = 1; n < numeros.length; n = n+2) {
        totalNum+=numeros[n];
        x = x + 1;
    }
    /*Retornamos el total*/
    return totalNum / x;
}
console.log(mediaImpares([3,5,6,4,7,1]));

/* EJERCICIO 5*/
function invierte(listado) {
    let list = [];
    for (let i = listado.length - 1; i >= 0; i--) { 
        list.push(listado[i]);
    }
    return list; 
}
console.log(invierte([2,1,5,4,8,9]));