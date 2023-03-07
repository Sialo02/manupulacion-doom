const h1 = document.querySelector ('h1');
const form = document.querySelector ('#form');
const input1 = document.querySelector ('#numero1');
const input2 = document.querySelector ('#numero2');
const btn = document.querySelector ('#btnCalcular');
const pResultado = document.querySelector ('#resultado');

form.addEventListener('submit',sumarInputsValues() );

function sumarInputsValues (evento) {
    evento.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}
function btnOnClick () {
    let sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}