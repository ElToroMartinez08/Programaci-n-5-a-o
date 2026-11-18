function level1() {
    let num = parseInt(prompt('Ingrese un numeroq'));
    let suma = 0;
    while (num >= 0) {
        suma += num;
        num = parseInt(prompt('Ingrese un numeroq'));
    }
    alert(`Tu total suma: ${suma}`);
}

function level1b() {
    let suma = 0;
    let num;
    do {
        num = parseFloat(prompt('Ingrese un numero'));
        while (isNaN(num)) {
            alert('mal');
            num = parseFloat(prompt('Ingrese un numero'));
        }
        if (num >= 0) {
            suma += num;
        }
    } while (num >= 0);

    alert(`La suma total es: ${suma}`);
}

function level2() {
    let num;
    let positivos = 0, negativos = 0, zero = 0;
    for (let i = 0; i < 10; i++) {
        num = parseInt(prompt('Ingrese un numeroq'));
        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        } else {
            zero++;
        }
    }
    alert(`Positivos: ${positivos}, Negativos: ${negativos}, Zeros: ${zero}`);
}

function level2b() {
    let positivos = 0, negativos = 0, zero = 0;
    let num;
    for (let i = 0; i <= 10; i++) {
        num = parseInt(prompt(`Ingrese ${i} nuuuuuuuuuumnero`));
        while (isNaN(num)) {
            alert('Mal');
            num = parseInt(prompt(`Ingrese ${i} nuuuuuuuuuumnero`));
        }
        if (num > 0) {
            positivos++;
        } else {
            if (num < 0) {
                negativos++;
            } else {
                zero++;
            }
        }
    }
}

function level2C() {
    let positivos = 0, negativos = 0, zero = 0;
    let num;
    for (let i = 0; i <= 10; i++) {
        num = parseInt(prompt(`Ingrese ${i} nuuuuuuuuuumnero`));
        if (isNaN(num)) {
            alert('Mal');
            i--;
        } else {
            if (num > 0) {
                positivos++;
            } else {
                if (num < 0) {
                    negativos++;
                } else {
                    zero++;
                }
            }
        }
    }
}

function level3() {
    let promedio = 0, suma = 0;
    let num = parseInt(prompt('Ingrese un numeroq'));
    while (num !== 0) {
        if (isNaN(num)) {
            alert('No.');
            num = parseInt(prompt('Ingrese un numeroq'));
        } else if (num > 0) {
            promedio++;
            suma += num;
        }
        num = parseInt(prompt('Ingrese un numeroq'));
        while (isNaN(num)) {
            alert('No.');
            num = parseInt(prompt('Ingrese un numeroq'));
        }
    }
    if (promedio > 0) {
        alert(
            `Suma de todos los numeros: ${suma} y su promedio es ${suma / promedio}`
        );
    } else {
        alert('no');
    }
}

function level4() {
    let mayor = 0, anciano = 0;
    let edad;
    for (let i = 0; i < 5; i++) {
        edad = parseInt(prompt('Ingrese un edad'));
        while (isNaN(edad) || edad < 0) {
            alert('no');
            edad = parseInt(prompt('Ingrese un edad'));
        }
        if (edad >= 18) {
            mayor++;
            if (edad >= 65) {
                anciano++;
            }
        }
    }
    alert(`${mayor} son mayors de edad y ${anciano} están en grupo especial`);
}

function level5() {
    let cont3 = 0, cont5 = 0, cont3y5 = 0;
    for (let i = 1; i < 50; i++) {
        if (i % 3 === 0) {
            cont3++;
        }
        if (i % 5 === 0) {
            cont5++;
        }
        alert(`${cont3} son multiplos de 3 y ${cont5} son multiples de 5`);
    }
}

function level6() {
    let cont = 0, suma = 0;
    let num = parseInt(prompt('Ingrese un numeroq'));
    do {
        while (isNaN(num)) {
            alert('no');
            num = parseInt(prompt('Ingrese un numeroq'));
        }
        if (num <= 100) {
            suma += num;
            cont++;
        }
        num = parseInt(prompt('Ingrese un numeroq'));
    } while (num <= 100);
    alert(`Se ingresaron ${cont} numeros y su suma total añade a ${suma}`);
}

function level7() {
    //pedir 10  e informar el may y elmen
    // let num = parseInt(prompt("Ingrese un numeroq"));
    // let min = num, max = num
    // for (let i = 1; i < 10; i++) {
    //     if (max < num) {
    //         max = num
    //     } else {
    //         if (min > num) {
    //             min = num
    //         }
    //     }

    //     num = parseInt(prompt("Ingrese un numeroq"))
    // } alert(`Max: ${max} y Min: ${min}`)

    let num;
    let mayor;
    let menor;

    for (let i = 1; i <= 10; i++) {
        num = parseFloat(prompt(`Ingrese el ${i} numero`));
        while (isNaN(num)) {
            alert('no');
            num = parseFloat(prompt(`Ingrese el ${i} numero`));
        }
        if (i === 1) {
            mayor = num;
            menor = num;
        } else {
            if (num > mayor) {
                mayor = num;
            } else {
                if (num < menor) {
                    menor = num;
                }
            }
        }
    }
    alert(`Mayor_ ${mayor} menor: ${menor}`);
}

function level8() {
    let contPares = 0, contImp = 0;
    let num = parseFloat(prompt('Ingrese un numeroq'));

    // while (num >= 0) {
    //     while (isNaN(num)) {
    //         alert('no');
    //         num = parseFloat(prompt(`Ingrese el ${i} numero`));
    //     }
    //     if (num % 2 === 0) {
    //         contPares++;
    //     } else {
    //         contImp++;
    //     }
    //     num = parseInt(prompt('Ingrese un numeroq'));
    // }

    while (isNaN(num) || num >= 0) {
        if (isNaN(num)) {
            alert('no')
        } else {
            if (num % 2 === 0) {
                contPares++
            } else {
                contImp++
            }
        }
        num = parseFloat(prompt('Ingrese un numeroq'));
    }

    alert(`Impares: ${contImp} e pares: ${contPares}`)
}

function level9() {
    let num;
    let aprobados = 0, suma = 0, desaprobados = 0

    for (let i = 0; i < 15; i++) {
        num = parseFloat(prompt(`Ingrese la nota n° ${i + 1}`));
        while (isNaN(num)) {
            alert('no');
            num = parseFloat(prompt(`Ingrese la nota n° ${i + 1}`));
        }
        if (num >= 7) {
            aprobados++
        } else {
            desaprobados++
        }
        suma += num
    }
    promedio = suma / 15
    alert(`Aprobados:  ${aprobados} y Desaprobados: ${desaprobados} y promedio es: ${promedio.toFixed(2)}`)
}

function level10() {
    let num = parseFloat(prompt('Ingrese un precio'));
    let total = 0, precioFinal = 0
    do {
        total += num
        num = parseFloat(prompt('Ingrese un precio'));
    } while (num !== 0)
    if (total >= 10000) {
        descuento = total * 0.10
        precioFinal = total - descuento
        alert(`Tu total es de $${precioFinal} (con descuento)`)
    } else {
        alert(`Tu total es de $${total}`)
    }

}

// function level11() {
//     let num = parseInt(prompt('Ingrese un numero'));
//     while (isNaN(num)) {
//         alert('no');
//         num = parseFloat(prompt(`Ingrese un numero`));
//     }
//     let max = num, min = num
//     do {
//         while (isNaN(num)) {
//             alert('no');
//             num = parseFloat(prompt(`Ingrese un numero`));
//         }
//         if (num > max) {
//             max = num
//         }
//         if (num < min) {
//             min = num
//         }
//         num = parseInt(prompt('Ingrese un numero'));
//     } while (num !== 0)
//     alert(`Max: ${max} y Min ${min}`)
// }

// function level12() {
//     let num = 0, pares = 0, cantPares = 0, impares = 0
//     for (let i = 0; i < 10; i++) {
//         num = parseInt(prompt(`Ingresa el numero n° ${i + 1}`));
//         if (num % 2 === 0) {
//             pares += num
//             cantPares++
//         } else {
//             impares++
//         }
//     }
// } todo estos ejercicios nada qe ver me puse a hacer otro q poco nada tenia q ver

//solucion sotos
function level11() {
    let num, mayor
    let primero = true;
    do {
        num = parseFloat(prompt("Ingresa un número"))
        if (num !== 0) {
            if (primero) {
                mayor = num
                primero = false
            } else {
                if (num > mayor) {
                    mayor = num
                }
            }
        }
    } while (num !== 0)

    if (!primero) {
        alert(`el mayor numero es: ${mayor}`)
    } else {
        alert(`No se ingresaron numeros validos`)
    }
}

function level12() {
    let contador = 0
    let num;
    for (let i = 1; i <= 10; i++) {
        num = parseFloat(prompt("Ingrese un numero"))

        if (num >= 10 && num >= 50) {
            contador++
        }
    }
}
//fin solucion sotos

function level13() {
    let num = parseFloat(prompt('Ingrese un precio'));
    let pares = 0
    do {
        if (num % 2 === 0 && num >= 0) {
            pares += num
        }
        num = parseFloat(prompt('Ingrese un precio'));
    } while (num >= 0)
    alert(`COMO TE VA MMMMMM LA SUMA DE LOS PARES ES DE ${pares}`)
}

function level14() {
    let sueldo = 0, millonarios = 0, suelditos = 0
    for (let i = 0; i < 8; i++) {
        sueldo = parseFloat(prompt(`Ingrese el sueldo n° ${i + 1}`));
        while (isNaN(num)) {
            alert('no');
            num = parseFloat(prompt(`Ingrese la nota n° ${i + 1}`));
        }
        if (sueldo > 1000000) {
            millonarios++
        }
        suelditos += sueldo
    }
    alert(`hay ${millonarios} millonarios y el promedio de todos los sueldos es de $${(suelditos / 8).toFixed(2)}`)
}

function level15() {
    let ambos = 0, de2 = 0, de3 = 0
    for (i = 0; i < 100; i++) {

        if ((i + 1) % 2 === 0 && (i + 1) % 3 === 0) {
            ambos++
        } else {
            if ((i + 1) % 2 === 0) {
                de2++
            }
            if ((i + 1) % 3 === 0) {
                de3++
            }
        }
        console.log(i + 1)
    }
    alert(`De esos numeros hay ${de2} multiplos de 2 ${de3} multiplos de 3 y de ambos ${ambos}`)
}

function level16() {
    let num = parseFloat(prompt('Ingrese un precio'));
    let menor = num
    do {
        if (num < menor) {
            menor = num
        }
        num = parseFloat(prompt('Ingrese un precio'));
    } while (num < 1000)
    alert(`El menor ingresado ${menor}`)
}

function level17() {
    let num;
    let rangoMedio = 0, mayores30 = 0, menores10 = 0
    for (let i = 0; i < 12; i++) {
        num = parseFloat(prompt(`Ingrese temperatura n° ${i + 1}: `));
        if (num > 30) {
            mayores30++;
        } else {
            if (num < 10) {
                menores10++;
            } else {
                rangoMedio++;
            }
        }
    }
    alert(`De los cuales ${mayores30} son mayores a 30°, ${menores10} son menores a 10° y ${rangoMedio} están en el rango medio`)
}

function level18() {
    let num;
    let num5 = 0
    do {
        num = parseFloat(prompt(`Ingrese el numero: `));
        if (num % 5 === 0 && num !== 0) {
            num5++
        }
    } while (num !== 0)
    alert(`De los cuales ${num5} son multiplo de 5`)
}

function level19() {
    let num;
    let positivos = 0, negativos = 0
    for (let i = 0; i < 10; i++) {
        num = parseFloat(prompt(`Ingrese el numero n°${i + 1}: `));
        if (num > 0) {
            positivos++
        } else {
            if (num < 0) {
                negativos++
            }
        }
    }
    if (negativos === positivos) {
        alert('empate')
    } else {
        if (positivos > negativos) {
            alert('hay mas positivos')
        } else {
            alert('Hay mas negativos')
        }
    }
}

function level20() {
    let num = parseFloat(prompt('Ingrese un precio'));
    let total = 0, precioFinal = 0
    do {
        total += num
        num = parseFloat(prompt('Ingrese un precio'));
    } while (num !== 0)
    if (total > 20000) {
        descuento = total * 0.15
        precioFinal = total - descuento
        alert(`Tu total es de $${precioFinal} (con descuento del 15%)`)
    } else {
        if (total > 5000) {
            descuento = total * 0.05
            precioFinal = total - descuento
            alert(`Tu total es de $${precioFinal} (con descuento del 5%)`)
        } else {
            alert(`Tu total es de $${total}`)
        }
    }
}

function level21() {
    let num;
    let cont = 0, totalPositivos = 0, contPositivos = 0
    do {
        num = parseFloat(prompt('Ingrese un numero'));
        while (isNaN(num)) {
            alert('no')
            num = parseFloat(prompt('Ingrese un numero'));
        }
        cont++
        if (num > 0) {
            totalPositivos += num
            contPositivos++
        }
    } while (num > 0)
    alert(`Ingresaste ${cont} numeros, de los cuales los positivos promediaron ${(totalPositivos / contPositivos).toFixed(2)}`)

}

function level22() {
    let num;
    let pares = 0, impares = 0, mayoresA100 = 0
    for (let i = 0; i < 12; i++) {
        num = parseFloat(prompt(`Ingresa numero n°${i + 1}`));
        while (isNaN(num)) {
            alert('no')
            num = parseFloat(prompt(`Ingresa numero n°${i + 1}`));
        }
        if (num > 100) {
            mayoresA100++
        }
        if (num % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }
    alert(`De los cuales ${mayoresA100} son mayores a 100, ${pares} son pares y ${impares} son impares`)
}

function level23() {
    // let num = parseFloat(prompt('Ingrese un precio'));
    // while (isNaN(num)) {
    //     alert('no')
    //     num = parseFloat(prompt(`Iingrese un precio`));
    // }
    // let max = num, min = num
    // do {

    //     if (num > max) {
    //         max = num
    //     } else {
    //         if (num < min) {
    //             min = num
    //         }
    //     }
    //     num = parseFloat(prompt('Ingrese un precio'));
    //     while (isNaN(num)) {
    //         alert('no')
    //         num = parseFloat(prompt(`Iingrese un precio`));
    //     }
    // } while (num !== 0)
    // alert(`Maximo: ${max} minimo: ${min}`)

    let num;
    let mayor;
    let menor;
    let bandera = true;
    do {
        num = parseFloat(prompt("INGRESE NUMERO"))
        if (num !== 0) {
            mayor = num
            menor = num
            bandera = false
        } else {
            if (num > mayor) {
                mayor = num
            } else {
                if (num < menor) {
                    menor = num
                }
            }
        }
    } while (num !== 0)
    if (bandera) {
        console.log("ningun valor se ingreso")
    } else {
        alert(`Maximo: ${max} minimo: ${min}`)
    }
}

function level24() {
    let num;
    let ancianos = 0, mayores = 0, menores = 0
    for (let i = 0; i < 10; i++) {
        num = parseInt(prompt(`Ingresa edad n°${i + 1}`));
        while (isNaN(num) || num < 0) {
            alert('no')
            num = parseInt(prompt(`Ingresa numero n°${i + 1}`));
        }
        if (edad < 18) {
            menores++
        } else {
            mayores++
            if (edad > 65) {
                ancianos++
            }
        }
        // if (num > 65) {
        //     mayores++
        // }
        // if (num >= 18) {
        //     mayores++
        // } else {
        //     menores++
        // }
    }
}

function level25() {
    for (let i = 0; i < 80; i++) {
        if ((i + 1) % 4 === 0 && (i + 1) % 6 === 0) {
            console.log(`${(i + 1)} Es multiplo de ambos`)
        } else {
            if ((i + 1) % 4 === 0) {
                console.log(`${(i + 1)} Es multiplo de 4`)
            } else {
                if ((i + 1) % 6 === 0) {
                    console.log(`${(i + 1)} Es multiplo de 6`)
                }
            }
        }
    }

    let multiploDe4 = 0, multiploDe6 = 0, ambos = 0
}

function level26() {
    let num;
    let cont = 0, sumaTotal = 0, contNegativo = 0
    do {
        num = parseFloat(prompt('Ingrese un precio'));
        while (isNaN(num)) {
            alert('no')
            num = parseFloat(prompt('iIngrese un numero'));
        }
        if (num <= 500) {
            cont++
            sumaTotal += num
            if (num < 0) {
                contNegativo++
            }
        }
    } while (num <= 500)
    alert(`DE LOS CUALES SE INGRESARON ${cont} numeros, de los cuales la suma TOTAL ES DE : ${sumaTotal} y hubo ${contNegativo} negativos`)
}

function level27() {
    let num = parseFloat(prompt('Ingrese un numnero'));
    while (isNaN(num)) {
        alert('no')
        num = parseFloat(prompt('iIngrese un numero'));
    }
    let max = num, min = num
    let cuantasVeces10 = 0
    for (let i = 0; i < 14; i++) {
        if (num > max) {
            max = num
        } else {
            if (min > num) {
                min = num
            }
        }
        if (num === 10) {
            cuantasVeces10++
        }
        num = parseFloat(prompt('Ingrese un numnero'));
        while (isNaN(num)) {
            alert('no')
            num = parseFloat(prompt('iIngrese un numero'));
        }
    }
    alert(`Max: ${max} min: ${min} diez aparecio unas: ${cuantasVeces10} veces`)
}

function level28() {
    let num;
    let cont2 = 0, cont3 = 0, contAmbos = 0
    do {
        num = parseFloat(prompt('Ingresa un numero'));
        while (isNaN(num)) {
            alert('no')
            num = parseFloat(prompt(''));
        }
        if (num !== 0) {
            if (num % 2 === 0 && num % 3 === 0) {
                contAmbos++;
            } else {
                if (num % 2 === 0) {
                    cont2++
                } else {
                    if (num % 3 === 0) {
                        cont3++
                    }
                }
            }
        }
    } while (num > 0)
}

function level29() {
    let nota;
    let mayor;
    let menor;
    let promedio = 0, cantAprobados = 0, cantDesaprobados = 0
    for (let i = 0; i < 20; i++) {
        nota = parseFloat(prompt(`Ingrese la nota n° ${i + 1}: `))
        while (isNaN(nota) || nota < 0) {
            alert('no')
            nota = parseFloat(prompt(`Ingrese la nota n° ${i + 1}: `));
        }
        if (i === 0) {
            mayor = nota
            menor = nota
        } else {
            if (nota > mayor) {
                mayor = nota
            } else {
                if (nota < menor) {
                    menor = nota
                }
            }
        }
        promedio += nota
        if (nota > 6) {
            cantAprobados++
        } else {
            cantDesaprobados++
        }
    }
    return (`De 20 notas, el promedio general es de ${promedio / 20}, la nota más alta es ${mayor}, la nota más baja es ${menor}, aprobaron ${cantAprobados} y desaprobaron ${cantDesaprobados}`)

}

function level30() {
    let precio;
    let descuento = 0
    let cantidadDeProductos = 0, totalAPagar = 0
    do {
        precio = parseFloat(prompt(`Ingrese un precio `))
        while (isNaN(precio)) {
            alert('no')
            precio = parseFloat(prompt(`Ingrese un precio`));
        }
        if (precio > 0) {
            cantidadDeProductos++
        }
        totalAPagar += precio
    } while (precio !== 0)
    if (totalAPagar > 30000) {
        descuento = totalAPagar * 0.20
    } else {
        if (totalAPagar > 15000) {
            descuento = totalAPagar * 0.10
        }
    }

    if (descuento > 0) {
        console.log(`Usted tuvo un descuento de: $ ${descuento}`)
    }
    console.log(`Total a pagar ${total - descuento} cantidad de productos: ${cantidadDeProductos}`)
}