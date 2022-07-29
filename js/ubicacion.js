//constructor del objeto sugerencia para almacenar en arreglo
class Sugerencia {
    constructor(nombre, apellido,email,comentario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.comentario = comentario
    }
}
//arreglo para almacenar las diversas sugerencias
const sugerencias = [];

const sugerenciasEnLocalStorage = (listaSugerencias,sugerencias) => {localStorage.setItem(listaSugerencias,sugerencias)};

let nombre = document.getElementById("formGroupExampleInput");
let apellido = document.getElementById("formGroupExampleInput2");
let email = document.getElementById("exampleInputEmail1");
let comentario = document.getElementById("exampleFormControlTextarea1");

let coment = document.getElementById("coment");

//evento que ejecuta la funcion de guardado en arreglo + localStorage
coment.addEventListener("submit", agregarSugerencia);

//funcion de guardado en arreglo + localStorage
function agregarSugerencia(){
    nombre = nombre.value;
    apellido = apellido.value;
    email = email.value;
    comentario = comentario.value;

    sugerencias.push(new Sugerencia(nombre,apellido,email,comentario));

    sugerenciasEnLocalStorage("listaSugerencias", JSON.stringify(sugerencias));
}

const obtenerSugerencias = JSON.parse(localStorage.getItem("listaSugerencias"));

for (item of obtenerSugerencias){
    console.log(item);
}




