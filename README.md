## Programación 1

## Descripción
Taller de programación I - 5to año com F

## Temas trabajados
- selectivas / condicionales -> if/else, switch
- Repetitivas -> for, do while, while
- Arreglos -> Simples y compuestos, métodos
- P.O.O -> clases, subclases, objetos y pilares
- D.O.M (no lo vimos)

## - Selectivas:
permiten que el programa tome decisiones. Si la condicion es verdadera ejecuta una acción; si no, hace otra.

```bash
if(this.stock > 0) {
  console.log(`El stock está disponible y es igual a: ${this.stock}`)
} else {
  console.log("No hay stock disponible")
}
```

## - Repetitivas:
permiten ejecutar un bloque de código varias veces mientras se cumpla una condición o se recorra una estructura.

- For: se utiliza cuando sabemos cuántas veces queremos repetir una acción.
- While: repite un bloque de código mientras la condición sea verdadera. Primero verifica la condición y después ejecuta el código.
- Do while: ejecuta el código al menos una vez y después verifica si la condición se cumple para volver a repetirlo.

```bash
for (let i = 0; i < 5; i++) {
  console.log(`Vuelta número: ${i}`)
}
```

```bash
let i = 0
while (i < 5) {
  console.log(`Vuelta número: ${i}`)
  i++
}
```

```bash
let i = 0
do {
  console.log(`Vuelta número: ${i}`)
  i++
} while (i < 5)
```

## - Arreglos:
Son estructuras que permiten guardar varios datos dentro de una misma variable, de forma ordenada mediante índices, es decir, que para referirse a ellos se empieza con el 0 y no el 1.

- Arreglos simples: guardan varios datos dentro de una misma variable, generalmente del mismo tipo.
- Arreglos compuestos: permiten guardar objetos o estructuras que contienen varios datos relacionados dentro de un mismo arreglo.
- Métodos: son funciones que permiten agregar, eliminar, buscar o modificar elementos de un arreglo.

```bash
let productos = ['Teclado', 'Mouse', 'Monitor']
productos.push("Auriculares")
console.log(productos[0])
```

## - P.O.O (Programación Orientada a Objetos):
es una forma de programar que organiza el código en objetos, los cuales representan cosas de la vida real con sus propiedades (atributos) y acciones (métodos).

```bash
class Producto {
  constructor(nombre, stock) {
    this.nombre = nombre
    this.stock = stock
  }

  mostrarInfo() {
    console.log(`Producto: ${this.nombre} - Stock: ${this.stock}`)
  }
}
const prod1 = new Producto("Mouse", 10)
prod1.mostrarInfo()
```

## - D.O.M:
(no lo vimos). representacion estructurada de una pagina en forma de arbol; vinculamos HTML (visual), Javascript (logica) y CSS (estilos)

- JS:
```bash
let titulo = document.createElement("h1");
titulo.textContext = "hola"
titulo.classList.add("titulo")
```

- HTML:
```bash
<h1> hola </h1>
```

- CSS:
```bash
.titulo {
    color: pink;
}
```