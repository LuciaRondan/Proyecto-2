let parrafoServiciosSeleccionados = document.createElement("p");
let parrafoPrecioTotal = document.createElement("p");
let mensaje = `Servicios Seleccionados: `;
let mensaje2 = localStorage.getItem("resumen");
let serviciosElegidos = [];
let boton = document.getElementById("btnCalcular");

if(mensaje2 != null){
    let nuevoObjeto = JSON.parse(mensaje2);

    parrafoServiciosSeleccionados.innerHTML = nuevoObjeto.servicios;
    parrafoPrecioTotal.innerHTML = `Precio total: ${nuevoObjeto.precioTotal}`;
    
    let seleccionDeServicios = document.getElementById("seleccionDeServicios");
    seleccionDeServicios.appendChild(parrafoServiciosSeleccionados);
    let elementPrecioTotal = document.getElementById("seleccionDeServicios");
    elementPrecioTotal.appendChild(parrafoPrecioTotal);
}

boton.addEventListener("click", () => {

    let opcion = document.getElementById("servicioSeleccion").value;
    let objeto = obtenerServicioPorOpcion(opcion);
    serviciosElegidos.push(objeto);

    let precioTotal = calcularPrecioTotal(serviciosElegidos);

    guardarLocal("resumen", JSON.stringify(new ResumenServicios(serviciosElegidos, precioTotal)));

    mensaje += `${objeto.nombre }, `

    parrafoServiciosSeleccionados.innerHTML = mensaje;
    parrafoPrecioTotal.innerHTML = `Precio total: ${precioTotal}`;
    
    let seleccionDeServicios = document.getElementById("seleccionDeServicios");
    seleccionDeServicios.appendChild(parrafoServiciosSeleccionados);
    let elementPrecioTotal = document.getElementById("seleccionDeServicios");
    elementPrecioTotal.appendChild(parrafoPrecioTotal);
})


function obtenerServicioPorOpcion (opcion){
    switch(opcion){
        case "1": return crearSonido();
        case "2": return crearIluminacion();
        case "3": return crearDj();
        case "4": return crearEfectosEspeciales();
    }
}

function ResumenServicios(serviciosElegidos, precioTotal) {
    let nombres = "";
    serviciosElegidos.forEach(element => {
        nombres += `${element.nombre }, `
    });

    this.servicios = nombres
    this.precioTotal = precioTotal;
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

function guardarLocal(clave, valor){
    localStorage.setItem(clave, valor)
}