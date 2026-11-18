function level1() {
    // 1- Algoritmo que pida números hasta que se introduzca un cero. Debe mostrar la suma y el promedio de
    // todos los números introducidos
    let suma = 0, promedio = 0
    let bandera = true
    let num;
    do {
        num = parseFloat(prompt('Ingrese un numeral'))
        while (isNaN(num)) {
            alert("No.")
            num = parseFloat(prompt('Ingrese un numeral'))
        }
        if (num !== 0) {
            suma += num
            promedio++
        }
    } while (num !== 0);

    if (promedio !== 0) {
        alert(`LA SUMA DE SUS NUMEROS ES DE: ${suma} and su promedio es de ${suma / promedio}`)
    }
}

function level2() {
    // 2 - Realizar un algoritmo que pida números(se pedirá por teclado la cantidad de números a introducir).
    // El programa debe informar de cuantos números introducidos son mayores que 0, menores que 0 e
    // iguales a 0.
    let mayoresACero = 0, menoresACero = 0, igualesACero = 0
    let cantDeNumeros = parseInt(prompt("Ingresate cuantos numeros keres ingresa compa"))
    while (isNaN(cantDeNumeros)) {
        alert("No.")
        cantDeNumeros = parseFloat(prompt('Ingrese un numeral'))
    }
    let num;
    for (let i = 0; i < cantDeNumeros; i++) {
        num = parseFloat(prompt(`Ingrese el numero n°${i + 1}`))
        while (isNaN(num)) {
            alert("No.")
            num = parseFloat(prompt('Ingrese un numeral'))
        }
        if (num > 0) {
            mayoresACero++
        } else {
            if (num < 0) {
                menoresACero++
            } else {
                igualesACero++
            }
        }
    }
    alert(`USTE A INGRESAO ${mayoresACero} mayores a 0, ${menoresACero} menoresd a cero y ${igualesACero} ceros`)
}

function level3() {
    // 3 - Algoritmo que pida caracteres e imprima ‘VOCAL’ si son vocales y ‘NO VOCAL’ en caso contrario,
    // el programa termina cuando se introduce un espacio.
    let caracter;
    do {
        caracter = prompt("Ingresate")
        if (caracter !== ' ') {
            esVocal = caracter.toLowerCase()
            if (esVocal === 'a' || esVocal === 'e' || esVocal === 'i' || esVocal === 'o' || esVocal === 'u') {
                console.log("VOCAL")
            } else {
                console.log("NO VOCAL")
            }
        }
    } while (caracter !== ' ')
}

function level4() {
    let salario = 1500
    for (let i = 0; i < 6; i++) {
        salario = salario * 1.10
        console.log(`En el año n°${i + 1} su salario ha incrementado un 10% hasta $${salario.toFixed(2)}`)
    }
    console.log(`Su salario final es de ${salario.toFixed(2)}`)
}

function level5() {
    // Una casa de hamburguesas sencillas (S), dobles (D) y triples (T), las cuales tienen un costo de $20,
    // $25 y $28 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
    // Suponiendo que los clientes adquieren N hamburguesas, las cuales pueden ser de diferente tipo, realice
    // un algoritmo para determinar cuánto deben pagar.
    let opcionDeHamburguesa;
    let cantDeHamburguejas = parseInt(prompt("Cuantas hamburguejas va a pedir"))
    while (isNaN(cantDeHamburguejas)) {
        alert("No.")
        cantDeHamburguejas = parseInt(prompt('Ingrese un numeral'))
    }
    let precio = 0
    for (let i = 0; i < cantDeHamburguejas; i++) {
        opcionDeHamburguesa = prompt("Ingrese su hamburgueja").toLowerCase()
        if (!isNaN(opcionDeHamburguesa)) {
            alert('Ingresa algo, te vamos a matar.')
            i--
        } else {
            switch (opcionDeHamburguesa) {
                case 's':
                    precio += 20
                    break;
                case 'd':
                    precio += 25
                    break;
                case 't':
                    precio += 28
                    break
                default:
                    alert('Ingresa algo, no podes irte sin comer, te vamos a matar.')
                    i--
                    break
            }
        }
    }
    if (confirm('Desea pagar con tarjeta de credito?')) {
        alert(`Su total a pagar caballero con 5% de descuento: $${precio + (precio * 0.05)}`)
    } else {
        alert(`Su total a pagar caballero: $${precio}`)
    }

    // por que lo hacia más complicado (?)
    let total = 0;
    let tipo;
    let simples = 0;
    let dobles = 0;
    let triples = 0;

    let cantidad = parseInt(prompt("Ingrese la cantidad de hamburguesas"))

    for (let i = 0; i < cantidad; i++) {
        tipo = prompt(`Ingrese el tipo de hamburguesa n° ${i + 1}: \n S = Simple 20$ \n D = doble 25 \n t = triple (28`)

        tipo = tipo.toUpperCase()

        switch (tipo) {
            case "S":
                simples++
                break;
            case "D":
                dobles++
                break;
            case "T":
                triples++
                break;
            default:
                alert("no")
                i--
        }
    }

}

function level6() {
    // Una compañía fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de
    // N focos, el número de focos de cada color que hay en existencia. 
    let rojos = 0, verdes = 0, blancos = 0;
    let cantidadDeFocos = parseInt(prompt('Ingrese: \n 1. V (verde) \n 1. B (blanco) \n 1. R (rojo)'))
    while (isNaN(cantidadDeFocos)) {
        alert("No.")
        cantidadDeFocos = parseInt(prompt('Ingrese: \n V (verde) \n B (blanco) \n R (rojo)'))
    }

    for (let i = 1; i <= cantidadDeFocos; i++) {
        foco
    }

}

function level7() {
    // 7 - Se requiere un algoritmo para determinar cuánto ahorrará en pesos una persona diariamente, y en un
    // año, si ahorra $3 el primero de enero, $9 el dos de enero, $27 el 3 de enero y así sucesivamente todo
    // el año. 
    let ahorroDiario = 3;
    let ahorroAnual = 0

    for (let dia = 1; dia <= 365; dia++) {
        console.log(`dia n° ${dia + 1}: ahorro de ${ahorroDiario}`)
        ahorroAnual += ahorroDiario
        ahorroDiario = ahorroDiario * 3
    }

    console.log("")
}

function level8() {
    let num = parseInt(prompt("Ingrese un numero 1 al 10"))
    while (isNaN(num) || num < 1 || num > 10) {
        console.log("err")
        num = parseInt(prompt("Ingrese un numero 1 al 10"))
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}