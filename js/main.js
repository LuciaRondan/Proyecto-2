let servicio = prompt (`Servicios:
    1. Sonido
    2. Iluminacion
    3. DJ
    4. Efectos especiales
    5. Salir
`);

let edad = prompt("Ingrese su edad");

CalcularPrecio(servicio, edad);







function CalcularPrecio(servicio, edad){

    let precioDelServicio = 0;

    switch(servicio){
        case "1": 
            precioDelServicio = 1000;
            break;
        case "2": 
            precioDelServicio = 2000;
            break;
        case "3": 
            precioDelServicio = 3000;
            break;
        case "4": 
            precioDelServicio = 4000;
            break;
        default:
            precioDelServicio = 0;
            break;

    }

    const precioObject = new Precio(precioDelServicio, edad);

    precioObject.aplicarDescuento();
    alert(precioObject.precio);
}



function Precio(precio, edad = 0){
    this.precio = precio;
    this.edad = edad;
    
    this.mereceDescuento = () => {
        if(this.edad == 15){
            return true;
        }
        return false
    }
    this.aplicarDescuento = () => {
        if(this.mereceDescuento()){
            this.precio *= 0.8;
        }
    }
}
    



