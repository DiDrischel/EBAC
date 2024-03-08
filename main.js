function validaFormulario() {
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;

    if (parseFloat(campoB) > parseFloat(campoA)) {
        alert('Formulário válido. O nº B é maior que o nº A')
    } else {
        alert('Formulário inválido. O nº B é menor que o nº A')
    }
}