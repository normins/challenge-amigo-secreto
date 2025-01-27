// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(){
    const inputAmigoD = document.getElementById("amigo");
    const nombre = inputAmigoD.value.trim();
    
    if (validarNombre(nombre)) {
        amigos = actualizarLista(nombre);
    inputAmigoD.value = "";
    inputAmigoD.focus();
    }
   }

// Función para validar el nombre del amigo ingresado
function validarNombre(nombre) {
    if (nombre === ""){
        alert("Por favor, ingresa un nombre");
        return false;
    }
    
    if(amigos.includes(nombre)){
        alert("Este amigo ya está en la lista");
        return false;
    }
    return true;
}

// Función para actualizar la lista de nombres en el DOM y retornar el nuevo arreglo
function actualizarLista(nuevoAmigo) {
    amigos.push(nuevoAmigo);

    const listaAmigosD = document.getElementById("listaAmigos");
    listaAmigosD.innerHTML = "";

    amigos.forEach((amigo) => {
        const liD = document.createElement("li");
        liD.textContent = amigo;
        listaAmigosD.appendChild(liD);
    });

    return amigos;
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo(){
    console.log(amigos);
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos participantes para realizar el sorteo.");
        return;
    }

    const indiceElegido = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos[indiceElegido];
    
    const resultadoD = document.getElementById("resultado");
    resultadoD.textContent = `El amigo secreto es: ${amigoElegido}`;
    
}


