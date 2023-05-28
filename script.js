var numeros = [];

function capturarNumero() {
    var numero = parseInt(document.getElementById("numeroInput").value);

    if (numero !== 0) {
        numeros.push(numero);
        document.getElementById("numeroInput").value = "";
    } else {
        mostrarNumerosCapturados();
    }
}

function mostrarNumerosCapturados() {
    var lista = document.getElementById("numerosLista");
    lista.innerHTML = "";

    for (var i = 0; i < numeros.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(numeros[i]));
        lista.appendChild(li);
    }
}
