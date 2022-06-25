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

boton.addEventListener("click", async () => {
    let opcion = document.getElementById("servicioSeleccion").value;
    let objeto = await obtenerServicioPorOpcion(opcion);
    console.log(objeto);
    serviciosElegidos.push(objeto);

    let precioTotal = calcularPrecioTotal(serviciosElegidos);

    guardarLocal("resumen", JSON.stringify(new ResumenServicios(serviciosElegidos, precioTotal)));

    mensaje += `${objeto.nombre }, `

    parrafoServiciosSeleccionados.innerHTML = mensaje;
    parrafoPrecioTotal.innerHTML = `Precio total: ${precioTotal}`;
    Swal.fire(`Precio total: ${precioTotal}`);
    
    let seleccionDeServicios = document.getElementById("seleccionDeServicios");
    seleccionDeServicios.appendChild(parrafoServiciosSeleccionados);
    let elementPrecioTotal = document.getElementById("seleccionDeServicios");
    elementPrecioTotal.appendChild(parrafoPrecioTotal);
})

async function obtenerServicioPorOpcion (opcion){
    const data = await fetch('../js/data.json');
    const dataJson = await data.json();
    let servicio = await dataJson.find(x => x.id == opcion);
    return new Servicio(servicio.nombre, servicio.precio);
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