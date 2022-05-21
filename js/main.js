let parrafoServiciosSeleccionados = document.createElement("p");
let parrafoPrecioTotal = document.createElement("p");
let mensaje = `Servicios Seleccionados: `;
let serviciosElegidos = [];
let boton = document.getElementById("btnCalcular");

boton.addEventListener("click", () => {

    let opcion = document.getElementById("servicioSeleccion").value;

    let objeto = obtenerServicioPorOpcion(opcion);

    serviciosElegidos.push(objeto);

    let precioTotal = calcularPrecioTotal(serviciosElegidos);
   

    mensaje += `${objeto.nombre }, `

    parrafoServiciosSeleccionados.innerHTML = mensaje;
    parrafoPrecioTotal.innerHTML = `Precio total: ${precioTotal}`;

    let seleccionDeServicios = document.getElementById("seleccionDeServicios");
    seleccionDeServicios.appendChild(parrafoServiciosSeleccionados);
    let elementPrecioTotal = document.getElementById("seleccionDeServicios");
    elementPrecioTotal.appendChild(parrafoPrecioTotal);
})




// let serviciosElegidos = [];
// let opcion = 5;

// do {
//     opcion = prompt (`Servicios:
//         1. Sonido
//         2. Iluminacion
//         3. DJ
//         4. Efectos especiales
//         5. Salir
//     `);

//     if(opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4 ) {
//         let servicio = obtenerServicioPorOpcion(opcion);
//         serviciosElegidos.push(servicio);
//     }
// } while (opcion != 5)

// let precioTotal = calcularPrecioTotal(serviciosElegidos);
// alert("El precio total de los servicios seleccionados es " + precioTotal);

// ///////////////////////////////////////////////////////////////////

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
     serviciosElegidos.forEach(x => {
        suma += x.precio;
     });
     return suma;
}