const form = document.getElementById('formNum');
var campoA = document.getElementById('campoA');
var campoB = document.getElementById('campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var numA = campoA.value;
    var numB = campoB.value;

    if (numB > numA) {
        alert(`Formulário válido! O número B (${numB}) é maior que o número A (${numA})`);
    } else {
        alert('Formulário inválido!');
    }
})

