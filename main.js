function validarFormulario() {

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    if (campoB > campoA) {
        exibirMensagemPositiva();
    } else {
        exibirMensagemNegativa();
    }
}

function exibirMensagemPositiva() {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = '<b>Formulário válido! Número B é maior que o número A.</b>';
    mensagemDiv.style.color = 'green';
}

function exibirMensagemNegativa() {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = '<b>Formulário inválido! Número B deve ser maior que o número A.</b>';
    mensagemDiv.style.color = 'red';
}
