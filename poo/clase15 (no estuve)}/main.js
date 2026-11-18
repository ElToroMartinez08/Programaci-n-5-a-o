function ej11() {
    const libros = [
        { titulo: "El Hobbit", disponible: true, generos: ["fantasia", "aventura"] },
        { titulo: "Dracula", disponible: false, generos: ["terror", "clasico"] },
        { titulo: "Harry Potter", disponible: true, generos: ["fantasia", "juvenil"] },
        { titulo: "it", disponible: true, generos: ["terror"] },
        { titulo: "Eragon", disponible: false, generos: ["fantasia", "aventura"] },
    ]
    const libro = libros.filter(p => p.disponible && p.generos.includes("fantasia"));
    libro.forEach(libro => { console.log(libro) });
    const agregar = libros.push({ titulo: "El Principito", disponible: true, generos: ["clasico"] });
    libros.forEach((libros) => { console.log(libros) });
}
function ej12() {
    const alumnos = [
        { nombre: "Gonzalo", materias: ["Matematica", "Fisica"] },
        { nombre: "Magali", materias: ["Lengua", "Historia"] },
        { nombre: "Agustin", materias: ["Matematica", "Lengua"] },
        { nombre: "Brunella", materias: ["Fisica", "Historia"] },
    ]
    const non = alumnos.filter(p => p.materias.includes("Matematica"))
    non.forEach(non => { console.log(non.nombre) });
    const brun = alumnos.findIndex(p => p.nombre === "Brunella");
    console.log(brun + 1)
}