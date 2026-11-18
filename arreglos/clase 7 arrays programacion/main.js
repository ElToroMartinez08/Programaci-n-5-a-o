function teoria() {
    const vacio = []

    const frutas = ["manzana", "banana", "naranja"]

    //acceder por indice
    console.log(frutas[0])
    console.log(frutas[2])

    //modificar un elemento
    frutas[1] = "pera"
    console.log(frutas)
    //


    //propiedad length
    const numeros = [10, 20, 30, 40, 50]
    console.log(numeros.length)

    const ultimo = numeros[numeros.length - 1]
    console.log(ultimo)

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i])
    }
    //


    //metodo push
    //agrega uyno o mas elementos al final del argelo y devuelvo la nueva longitud modoficia el arreglo original
    const tareas = ["estudiar", "hacer ejercicio"];
    tareas.push("leer")
    console.log(tareas)

    //podes agregar varios a la vez
    tareas.push("cocinar", "descansar")
    console.log(tareas.length) //5
    //


    //metodo foreach
    //ejecuta una funcion por cada elemento no devuelve un nuevo arreglosimplemente itera ideal para imprimir modifical el dom etc
    const nombres = ["ana", "luis", "mia"]
    nombres.forEach((nombre) => {
        console.log("hola", nombre)
    })

    //con indiicio
    nombres.forEach((nombre, i) => {
        console.log(`posicion ${i + 1}: ${nombre}`)
    })
    //


    //metodo filtre
    //devuelve un nuevo arreglo solo con los elementos que cumplan la condicion el arg og no se modifica
    const edades = [12, 25, 17, 30, 15, 22]
    const mayores = edades.filter((edad) => edad >= 18)
    console.log(mayores)

    //ocn strings
    const productos = ["apple", "mango", "pear", "apricot"]
    const conA = productos.filter((p) => p.startsWith("a"))
    console.log(conA)
    //


    //metodo map
    //devuelve un nuevo arreglo del mismo largo con cada elemento transformado segun la funcion el original no cambia
    const nums = [1, 2, 3, 4]

    //duplicar cada numero
    const dobles = nums.map((n) => n * 2)
    console.log(dobles)

    //convertir a strings con formato
    const precios = [100, 250, 80]
    const formateados = precios.map((p) => `$${p}`)
    console.log(formateados)
    //


    //metodo find
    //devuelve el primer elemento que cumple la condicion si ninguno cumple, deevuelve undefined
    const numeros2 = [3, 7, 15, 2, 22, 9]
    const resultado = numeros2.find((n) => n > 10)
    console.log(resultado)

    const palabras = ["luna", "sol", "mar", "cielo", "monte"]
    const res2 = palabras.find((p) => p.startsWith("m"))
    console.log(res2)
    //diferencia con filter. find devuelve un solo elemento el primero filter dewvuelve un arreglo on tood los que coinciden
    //


    //metodo findindex
    //como find pero devuelve el indice del emento si no lo encuentra devuelve -1
    const frutas2 = ["manzana", "banana", "naranja", "uva"]
    const idx = frutas2.findIndex((f) => f === "naranja")
    console.log(idx)

    const noExiste = frutas2.findIndex((f) => f === "kiwi")
    console.log(noExiste)

    const pos = frutas2.findIndex((f) => f === "banana")
    if (pos !== -1) frutas2[pos] = "mango"
    console.log(frutas2)
    //


    //metodo splice
    //modifica el arreglo original, puede eliminar, insertar o reemplazar devuelve un arreglo un arreglo con los elementos eliminados
    const letras = ["a", "b", "c", "d", "e"]
    //eliminar splice(inicio, cuantos elminar)
    const elim = letras.splice(1, 2)
    console.log(letras)
    console.log(elim)

    //insertar splice(posicion, 0, nuevos)
    letras.splcie(1, 0, "x", "y")
    console.log(letras)

    //reeemplazar
    letras.splice(2, 1, "2")
    console.log(letras)
    //


}

function ej1() {
    const nums = [4, 8, 15, 16, 23, 42]
    nums.forEach((num) => {
        console.log(num)
    })
}

function ej2() {
    const nums = [3, 12, 7, 25, 5, 18, 9, 30]
    const mayores = nums.filter((nums) => nums > 10)
    console.log(mayores)
}

function ej3() {
    const nums = [2, 5, 10, 3, 8, 6]
    const dobles = nums.map((n) => n * 3)
    console.log(dobles)
}

function ej4() {
    const nums = [14, 7, -3, 22, -8, 5, -1]
    const negativo = nums.find((num) => num < 0)
    console.log(negativo)
}

function ej5() {
    const nums = [12, 45, 67, 8, 91, 33, 55]
    const mayorA50 = nums.findIndex((num) => num > 50)
    console.log(mayorA50)
}

function ej6() {
    const frutas = ["manzana", "banana", "naranja", "uva"]
    frutas.push("mango")
    console.log(frutas)

}

function ej7() {
    const colores = ["rojo", "azul", "verde", "amarillo", "blanco"]
    colores.splice(0, 1)
    console.log(colores)
}

function ej8() {
    const vocales = ["a", "e", "i", "o", "u"]
    console.log(vocales.length)
}

function ej9() {
    //filermap numeros pares multiplicados por 2
    const nums = [1, 4, 7, 8, 3, 12, 5, 6, 11, 10]
    const multiplicadosPor2 = nums.map((num) => num * 2)
    const pares = multiplicadosPor2.filter((num) => num % 2 === 0)
    console.log(pares)
}

function ej10() {
    //filtrar temperaturasm ayores a 25 y generar un nuevo array con formato c
    const temps = [18, 25, 31, 12, 28, 35, 20]
    const mayoresA25 = temps.filter((temp) => temp > 25)
    console.log(mayoresA25)
    const nuevoArray = mayoresA25.map((temp) => `${temp}°C`)
    console.log(nuevoArray)
}

function ej11() {
    //findindex splice
    const nums = [5, 9, 14, 22, 3, 18, 27]
    const mayorA7 = nums.findIndex((num) => num % 7 === 0)
    const eliminar = nums.splice(mayorA7, 1)
    console.log(nums)
}

function ej12() {
    //filter foreach
    const nums = [2, 7, 10, 15, 4, 9, 12]
    const pares = nums.filter((num) => num % 2 === 0)
    pares.forEach((num) => {
        console.log(`${num} es par`)
    })
}

