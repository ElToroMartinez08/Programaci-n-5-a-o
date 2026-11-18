// EJ1_1
// Características (Atributos) de un celular:
//  Marca
//  Modelo
//  Capacidad de batería
//  Almacenamiento
//  Color
//  Sistema operativo
//  PIN de seguridad

// Acciones (Métodos) de un celular:
//  Cargar
//  Usar
//  Desbloquear
//  Cambiar PIN
//  Encender
//  Instalar aplicación

// Seleccionados:
// Atributos: marca, modelo, batería
// Métodos: cargar, usar


// EJ1 2 A EJ1 4 y EJ2 1 A EJ2 4 y EJ4 1
class Celular {
    #pin;

    constructor(marca, modelo, pin) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 100;
        this.#pin = pin;
    }

    cargar() {
        this.bateria = 100;
        console.log("El celular se ha cargado al 100%.");
    }

    usar(minutos) {
        this.bateria = Math.max(0, this.bateria - minutos);
    }

    desbloquear(pin) {
        return this.#pin === pin;
    }

    cambiarPin(pinActual, pinNuevo) {
        if (this.#pin === pinActual) {
            this.#pin = pinNuevo;
        } else {
            console.error("Error: El PIN actual es incorrecto.");
        }
    }

    encender() {
        console.log("El celular se enciende.");
    }
}

// EJ1 5
const cel1 = new Celular("Nokia", "1100", 1234);
const cel2 = new Celular("Motorola", "C115", 5678);

cel1.usar(20);
console.log(cel1.bateria);
cel1.cargar();

// EJ2 5
// Al escribir "celular.pin" desde afuera devuelve undefined porque no existe una propiedad pública con ese nombre. Al escribir "celular.#pin" desde afuera arroja un error de sintaxis (SyntaxError) porque las propiedades privadas no pueden ser accedidas ni leídas fuera de la clase.


// EJ3 1 A EJ3 4 y EJ4 2
class Smartphone extends Celular {
    constructor(marca, model, pin, sistema) {
        super(marca, model, pin);
        this.sistema = sistema;
        this.apps = [];
    }

    instalarApp(nombre) {
        this.apps.push(nombre);
        console.log(`La app ${nombre} se ha instalado con éxito.`);
    }

    encender() {
        console.log(`Iniciando ${this.sistema}...`);
    }
}

// Investigación super():super() invoca al constructor de la clase madre (Celular). Es obligatorio llamarlo antes de usar 'this' para que la clase hija pueda heredar correctamente los atributos y la estructura de la clase base.

// EJ3 5
const miSmartphone = new Smartphone("Samsung", "S23", 1111, "Android");
miSmartphone.usar(15);
console.log(miSmartphone.bateria);
miSmartphone.cargar();
console.log(miSmartphone.desbloquear(1111));

// EJ4 3
class CelularBasico extends Celular {
    encender() {
        console.log("Pantalla monocromática iluminada.");
    }
}

// EJ4 4
const listaCelulares = [
    new Celular("Generic", "X", 0),
    new Smartphone("Apple", "iPhone 15", 2222, "iOS"),
    new CelularBasico("Alcatel", "One Touch", 3333)
];

listaCelulares.forEach(celular => celular.encender());

// EJ4 5
// El resultado es distinto porque cada objeto ejecuta la versión del método encender() que fue definida en su propia clase. Aunque la orden en el código es exactamente la misma, el comportamiento final cambia según la naturaleza del objeto que la recibe.
