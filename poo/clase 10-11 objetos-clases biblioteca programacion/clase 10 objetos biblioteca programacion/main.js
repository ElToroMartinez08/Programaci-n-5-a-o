//ejs
const persona = {
    nombre: "Ana",
    edad: 25,
    esEstudiante: true
};
//
const usuario = {
    nombre: "Carlos",
    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
};
usuario.saludar(); // Muestra: Hola, soy Carlos
//
const persona1 = {
    nombre: "sofia", edad: 22
}
//
// esto es lo primero que escribio el profe original clase 11 (?)
// class alumno {
//     constructor(nombre, edad, carrera) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.notas = [];
//     }
//     agregarNota(nota) { this.notas.push(nota); }
//     promedio() {
//         return (suma / this.notas.length);
//     }
// }
// const al = new alumno("Lucas", 19, "sistemas");
// console.log(al.promedio())
//
//lo qeue nos dijo de agregar"arreglar"
class alumno {
    constructor(nombre, edad, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.notas = [];
    }
    agregarNota(nota) {
        this.notas.push(nota);
        return `Se agrego la nota ${nota} al estudiante ${this.nombre}`;
    }
    promedio() {
        if (this.notas.length > 0) {
            let suma = 0;
            this.notas.forEach(nota => {
                suma += nota
            });
            return `El estudiante ${this.nombre} tiene un promedio de ${suma / this.notas.length}`;
        }
        return `El estudiante ${this.nombre} no tiene notas cargadas!`
    }
}
const a1 = new alumno("Lucas", 19, "sistemas");
// a1.agregarNota(10)s
const a2 = new alumno("Yo", 15, "programacion");
console.log(a1.agregarNota(10));
console.log(a1.agregarNota(9));
console.log(a1.agregarNota(8));
console.log(a1.promedio());
console.log(a2.promedio());
console.log("--------------------")
//
//


//1 crear objeto literal libro con las siguientes propiedades titulo una cadena de texto con el titulo del lib
const libro = {
    titulo: "Hola soy un libro",
    autor: "yo",
    año: 1999,
    genero: "misterio",
    disponible: false,
    mostrarDetalles() {
        return `"${this.titulo}" por ${this.autor} publicado en ${this.año} genero ${this.genero} y está disponible? ${this.disponible}`
    },
    prestarLibro() {
        if (this.disponible) {
            this.disponible = false
            return "se ha prestao el libro devuelvaolololool"
        } else {
            return "no se ha poio nprestar"
        }
    },
};

//sot soluciones
const libro1 = {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949,
    genero: "Distopía",
    disponible: true,

    mostrarDetalles() {
        return `Titulo: ${this.titulo}, autor ${this.autor}, año: ${this.año}, genero ${this.genero}, disponible: ${this.disponible ? "si" : "no"}`;
    },
    prestarLibro() {
        if (this.disponible) {
            this.disponible = false
            return `el libro "${this.titulo} ha sido prestado"`
        } else {
            return `el libro "${this.titulo} no está dispoble"`
        }
    },
    devolverLibro() {
        if (!this.disponible) {
            this.disponible = true;
            return `El libro "${this.titulo}" ha sido devuelto`
        }
        return `El libro "${this.titulo}" no estaba prestado`
    },
    estaDisponible() {
        return `El libro "${this.titulo}", ${this.disponible ? "si" : "no"} está disponible`
    }
}
console.log("probando el objeto literal:")

console.log(libro1.mostrarDetalles())
console.log(libro1.prestarLibro())
console.log(libro1.prestarLibro())
console.log(libro1.devolverLibro())
console.log(libro1.estaDisponible())
console.log("\n --------------------")

//Segunda parte de la clase 11
class libro2 {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
        this.disponible = true
    }
    mostrarDetalles() {
        return `El libro "${this.titulo}" escrito por ${this.autor} publicado en ${this.año} y del genero ${this.genero}`
    }
    prestarLibro() {
        if (this.disponible) {
            this.disponible = false
            return `\n el libro "${this.titulo}" se te ha sido prestado. Devuelvalo cuando termine de usar.`
        }
        return `\n El libro "${this.titulo}" no está disponible para prestar`
    }
    devolverLibro() {
        if (!this.disponible) {
            this.disponible = true
            return `\n Usted ha devuelto el libro ${this.titulo}`
        }
        return `no podes devolver un libro que ya estpa en nuestro catalogo`
    }
}
const libra1 = new libro2("Confesiones de una máscara", "Yukio Mishima", 1949, "literatura confesional");
const libra2 = new libro2("The Catcher in the Rye", "J. D. Salinger", 1951, "novela de aprendizaje");
const libra3 = new libro2("La naranja mecánica", " Anthony Burgess", 1962, "novela distópica");
const libra4 = new libro2("La naranja mecánica 2", " Anthony Burgess", 1967, "novela distópica");
console.log(libra1.mostrarDetalles())
console.log(libra1.prestarLibro())
console.log(libra1.prestarLibro())
console.log(libra1.devolverLibro())
console.log(libra1.devolverLibro())
console.log(libra2.mostrarDetalles())
console.log(libra3.mostrarDetalles())
console.log("\n --------------------")

// class alumno {
//     agregarNota(nota) {
//         this.notas.push(nota);
//         return `Se agrego la nota ${nota} al estudiante ${this.nombre}`;
//     }
//     promedio() {
//         if (this.notas.length > 0) {
//             let suma = 0;
//             this.notas.forEach(nota => {
//                 suma += nota
//             });
//             return `El estudiante ${this.nombre} tiene un promedio de ${suma / this.notas.length}`;
//         }
//         return `El estudiante ${this.nombre} no tiene notas cargadas!`
//     }
// }

class Biblioteca {
    constructor() {
        this.libros = []
    }

    añadirLibro(libro) {
        if (this.libros.length < 4) { //pepe
            const buscado = this.libros.find(lib => lib.titulo === libro.titulo)
            if (!buscado) {
                this.libros.push(libro)
                return `se agrego el libro ${libro.mostrarDetalles()}`
            }
            return "El libro ya está en la biblioteca"
        }
        return "No podes agregar mas libros excediste el numero limite"

    }

    mostrarLibros() {
        return this.libros;
    }

    buscarLibroPorTitulo(titulo) {
        return this.libros.find(
            lib => lib.titulo.toLowerCase() === lib.titulo.toLowerCase()
        )
    }
}

const biblio2 = new Biblioteca()
console.log(biblio2.añadirLibro(libra1))
console.log(biblio2.añadirLibro(libra2))
console.log(biblio2.añadirLibro(libra3))
console.log(biblio2.añadirLibro(libra4))
console.log(biblio2.añadirLibro(libra2))
console.log(biblio2.añadirLibro(libra1))
console.log(biblio2.añadirLibro(libra1))
console.log(biblio2.añadirLibro(libra1))


//codigo cecotiano
// class Biblioteca1 {
//     constructor() {
//         this.libros = [];
//     }

//     añadirLibro(libro) {
//         const buscado = this.libros.find(lib => lib.titulo === libro.titulo)
//         if(!buscado) {
//             this.libros.push(libro)
//             return `se agrego el libro ${libro.mostrarDetalles()}`
//         }
//         return "El libro ya está en la biblioteca"

//     }
// }


