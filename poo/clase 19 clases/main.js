function repasoPrimeraActividadDeClase() {
    class Libro {
        constructor(titulo, autor, anio) {
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
        }
    }
    const libro1 = new Libro("Pepe", "Toño", 1999)
    const libro2 = new Libro("Infinite Jest", "David Foster Wallace", 1996)
    const libro3 = new Libro("Tokio Blues", "Haruki Murakami", 1987)
    console.log(libro1)
    console.log(libro2)
    console.log(libro3)
    console.log("----------------------");
    console.log(`consginaxd: libro: ${libro1['titulo']} aotrur: ${libro1['autor']} año: ${libro1['anio']}`);
    console.log(`livro 2._ ${libro2.titulo} Año: ${libro2.anio}`);
    console.log(`Llibroer3xd ${libro3.titulo} Año: ${libro3.anio}`);

}

/// esto eya sle eñ pttrabajio
function trabajoPractico() {
    //eja1
    class Libro {
        constructor(titulo, autor, paginas) {
            this.titulo = titulo;
            this.autor = autor;
            this.paginas = paginas;
        }
    }

    //eja2
    const libro1 = new Libro("El Templo del Pabellón de Oro", "Yukio Mishima", 368)
    const libro2 = new Libro("Infinite Jest", "David Foster Wallace", 1079)
    const libro3 = new Libro("Tokio Blues", "Haruki Murakami", 384)

    //ej3
    console.log(`consginaxd: libro: ${libro1['titulo']} aotrur: ${libro1['autor']} año: ${libro1['anio']}`);
    console.log(`livro 2._ ${libro2.titulo} Año: ${libro2.anio}`);
    console.log(`Llibroer3xd ${libro3.titulo} Año: ${libro3.anio}`);

    //ej4
    libro1.titulo = "El sol y el acero"
    console.log(libro1)
    libro2["paginas"] = 1100
    console.log(libro2)
}