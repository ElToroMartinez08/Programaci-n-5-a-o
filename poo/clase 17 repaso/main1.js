//arreglo simple 
const arregloSimple = [1, 2, 3, 4]

//arreglos compuestos
//ej 4
const arreglosCompuestos = [
    { id: 1, nombre: "lucia", nota: 4 },
    { id: 2, nombre: "Maia", nota: 9 },
    { id: 3, nombre: "Tomas", nota: 4 },
    { id: 4, nombre: "Jeremias", nota: 4 },
]

//estudiantes que tengan nombres de hasta cuatro letras
const estudiantesNombres = arreglosCompuestos.map(e => e.nombre).filter(e => e.length <= 4)

//estudiantes que hayan aprobado => mostrar nombre + nota
const aprobados = arreglosCompuestos.filter(e => e.nota >= 7).map(e => e.nombre + ": " + e.nota)
// const estudiantes4Letras = estudiantesNombres.filter(e => e.length <= 4)

console.log(estudiantesNombres)
console.log(aprobados)

function ej1() {
    const arreglo = ["Ana", "Luis", "Marta", "Pedro"]
    arreglo.forEach((arreglo) => { console.log(`Hola ${arreglo}`) })
}

function ej2() {
    let precio = 0
    const compra = [1200, 850, 430, 2100]
    compra.forEach((compra) => {
        precio += compra
        console.log(`El total viene siendo ${precio}`)
    })
}

function ej3() {
    const precios = [1000, 2500, 800, 1500].map(p => p + (p * 1.21))
    precios.forEach((precio) => {
        console.log(Math.round(precio))
    })
}

function ej3_3() {
    const precios = [1000, 2500, 800, 1500].map(p => p + (p * 1.21));
    return precios.map(precio => Math.round(precio));
}

function ej4() {
    const arreglosCompuestos = [
        { id: 1, nombre: "lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 4 },
        { id: 4, nombre: "Jeremias", nota: 4 },
    ]
    const estudiantesNombres = arreglosCompuestos.map(e => e.nombre)
    console.log(estudiantesNombres)
}

function ej5() {
    const arreglosCompuestos = [
        { id: 1, nombre: "lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 4 },
        { id: 4, nombre: "Jeremias", nota: 4 },
    ]
    const estudiantesNombres = arreglosCompuestos.map(e => e.nombre).filter(e => e.length > 4)
    console.log(estudiantesNombres)
}

function ej6() {
    const arreglosCompuestos = [
        { id: 1, nombre: "lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 4 },
        { id: 4, nombre: "Jeremias", nota: 4 },
    ]
    const buscarIdTres = arreglosCompuestos.find(e => e.id === 3)
    //devuelve el elemento {id: 3, nombre: 'Tomas', nota: 4}
    console.log(buscarIdTres)
    //Devuelve automaticamente   el undefined
    const buscarIdDiez = arreglosCompuestos.find(e => e.id === 10)
    console.log(buscarIdDiez)
}

function ej7() {
    const productos = [
        { nombre: "Mouse", stock: 5 },
        { nombre: "Teclado", stock: 0 },
        { nombre: "Monitor", stock: 2 },
        { nombre: "Webcam", stock: 0 }
    ];
    const productosNombres = productos.filter(e => e.stock > 0).map(e => e.nombre)
    console.log(productosNombres)
}

function ej8(productoAAgregar) {
    const carrito = ["pan", "mayonesa"]
    if (!carrito.includes(productoAAgregar)) {
        carrito.push(productoAAgregar);
    } else {
        console.log("no.")
    }
    return carrito
}

function ej9() {
    const notitas = [
        { id: 1, nombre: "lucia", nota: 4 },
        { id: 2, nombre: "Maia", nota: 9 },
        { id: 3, nombre: "Tomas", nota: 4 },
        { id: 4, nombre: "Jeremias", nota: 4 },
    ]
    //estudiantes que tengan nombres de hasta cuatro letras
    const estudiantesNombres = arreglosCompuestos.map(e => e.nombre).filter(e => e.length <= 4)

    //estudiantes que hayan aprobado => mostrar nombre + nota
    const aprobados = arreglosCompuestos.filter(e => e.nota >= 7).map(e => e.nombre + ": " + e.nota)
    // const estudiantes4Letras = estudiantesNombres.filter(e => e.length <= 4)
}

function ej10() {
    
}