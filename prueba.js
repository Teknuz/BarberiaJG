let lista = ["Jose","Juan", "Sueter"];
console.log(lista);
console.log(lista.push("Marcos"))
console.log(lista);
//console.log(lista[0]);

var obtenerNombre = () => console.log(lista[0]);
obtenerNombre();


function Persona(nombre,edad,telefono){
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;    
}
class Cliente extends Persona(){

    
}



const Persona1 = new Persona("Fiorela Magali",22,98620264,"Barbero/Ing. Informatico");
Persona1.saludar();
lista.push(Persona1.nombre);
console.log(lista);


