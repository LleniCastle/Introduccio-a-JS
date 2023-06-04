function myFunction() {
    var x, y, resultado, text;
    x = document.querySelector("#cantidad").value;
    y = 15990;

    if (x < 1) {
        alert('Es necesario aplicar cantidad para dar valor al producto');
    }

    else {
        resultado = parseFloat(x) * parseFloat(y);
        text = resultado;
    }
    document.querySelector(".resultado").innerHTML = text;
}

function miFuncion() {
    element = document.querySelector('#color');
    colores1 = document.querySelector('.colores1');
    colores1.style.backgroundColor = element.value;

    if ("gray" == color.value) {
        alert('Producto agotado')
    }
}
