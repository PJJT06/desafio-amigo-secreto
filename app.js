// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// No es necesario que utilices ninguna librería externa, simplemente debes implementar la lógica en JavaScript puro.
let amigos = [];
    // Agrega un amigo a la lista de amigos

function agregarAmigo() {

    let nombre = document.getElementById("amigo").value;

    if (typeof nombre !== "string" || nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }

}
// Muestra la lista de amigos en la interfaz
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

   



