let serviciosElegidos = [];
let opcion = 5;

do {
    opcion = prompt (`Servicios:
        1. Sonido
        2. Iluminacion
        3. DJ
        4. Efectos especiales
        5. Salir
    `);

    let servicio = obtenerServicioPorOpcion(opcion);
    serviciosElegidos.push(servicio);
} while (opcion != 5)

let precioTotal = calcularPrecioTotal(serviciosElegidos);
alert(precioTotal);

///////////////////////////////////////////////////////////////////

function obtenerServicioPorOpcion (opcion){
    switch(opcion){
        case "1": return crearSonido();
        case "2": return crearIluminacion();
        case "3": return crearDj();
        case "4": return crearEfectosEspeciales();
    }
}

function Servicio(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function crearSonido(){
    return new Servicio("Sonido", 1000);
}

function crearIluminacion(){
    return new Servicio("Iluminacion", 2000);
}

function crearDj(){
    return new Servicio("dj", 3000);
}

function crearEfectosEspeciales(){
    return new Servicio("Efectos especiales", 4000);
}

function calcularPrecioTotal(serviciosElegidos){

    let suma = 0;
    console.log(serviciosElegidos)
     serviciosElegidos.forEach(x => {
        suma += x.precio;
     });
     return suma;
}