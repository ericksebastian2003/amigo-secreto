let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");
    
    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${ganador} 🎉`;
    resultado.appendChild(li);
}
