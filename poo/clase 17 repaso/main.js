function ej1() {
  let contenido = [
    { id: 1, titulo: "Inception", tipo: "Película", duracionMin: 148, genero: "Sci-Fi", rating: 8.8 },
    { id: 2, titulo: "Stranger Things", tipo: "Serie", duracionMin: 50, genero: "Sci-Fi", rating: 8.7 },
    { id: 3, titulo: "The Office", tipo: "Serie", duracionMin: 22, genero: "Comedia", rating: 8.9 },
    { id: 4, titulo: "Interstellar", tipo: "Película", duracionMin: 169, genero: "Sci-Fi", rating: 8.6 },
    { id: 5, titulo: "Parasite", tipo: "Película", duracionMin: 132, genero: "Drama", rating: 8.5 }
  ];

  let titulosPeliculasAltaRating = contenido.filter(cont => cont.tipo === "Película" && cont.rating >= 8.6).map(cont => cont.titulo);
  let primeraComedia = contenido.find(cont => cont.genero === "Comedia");
  let contenidoConHoras = contenido.map(cont => ({ titulo: cont.titulo, duracionHoras: cont.duracionMin / 60 }));
  let indiceDuracionLarga = contenido.findIndex(cont => cont.duracionMin > 150);

  console.log(titulosPeliculasAltaRating);
  console.log(primeraComedia);
  console.log(contenidoConHoras);
  console.log(indiceDuracionLarga);
}

function ej2() {
  let turnos = [
    { id: 101, paciente: "Carlos Gomez", especialidad: "Cardiología", confirmado: true, costo: 4500 },
    { id: 102, paciente: "Mariana Lopez", especialidad: "Dermatología", confirmado: false, costo: 3800 },
    { id: 103, paciente: "Roberto Diaz", especialidad: "Cardiología", confirmado: true, costo: 5000 },
    { id: 104, paciente: "Lucía Fernandez", especialidad: "Pediatría", confirmado: false, costo: 3200 },
    { id: 105, paciente: "Gonzalo Perez", especialidad: "Dermatología", confirmado: true, costo: 4000 }
  ];

  let turnosPendientes = turnos.filter(turno => turno.confirmado === false);
  let fichaPediatria = turnos.find(turno => turno.especialidad === "Pediatría");
  let cantidadCardioConfirmados = turnos.filter(turno => turno.especialidad === "Cardiología" && turno.confirmado === true).length;

  turnos.forEach(turno => {
    let estadoTexto = turno.confirmado ? "Confirmado" : "Pendiente";
    console.log(`${turno.paciente} - Especialidad: ${turno.especialidad} - Estado: ${estadoTexto}`);
  });

  console.log(turnosPendientes);
  console.log(fichaPediatria);
  console.log(cantidadCardioConfirmados);
}

function ej3() {
  let carrito = [
    { producto: "Teclado Mechanical", precio: 15000, oferta: true },
    { producto: "Mouse Gamer", precio: 8000, oferta: false },
    { producto: "Monitor 24'", precio: 65000, oferta: true }
  ];

  let ofertas = carrito.filter(item => item.oferta === true);

  console.log("Cantidad de ofertas:", ofertas.length);
  console.log("Lista de ofertas:", ofertas);
}

function ej4() {
  let estudiantes = [
    { dni: 40123456, nombre: "Camila", nota: 9 },
    { dni: 41987654, nombre: "Agustin", nota: 7 },
    { dni: 42555666, nombre: "Tomas", nota: 4 }
  ];

  let dniBuscado = 45000000;
  let alumnoEncontrado = estudiantes.find(e => e.dni === dniBuscado);

  if (alumnoEncontrado) {
    return (`El alumno es ${alumnoEncontrado.nombre} y su nota es ${alumnoEncontrado.nota}`);
  }
  console.log("Alumno no encontrado en el sistema");
}