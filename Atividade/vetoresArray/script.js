function somarElementos() {
  const vetor = [5, 10, 15, 20, 25];
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  document.getElementById('resultadoSoma').innerText = "Soma = " + soma;
}

function maiorMenor() {
  const valores = [
    Number(document.getElementById('n1').value),
    Number(document.getElementById('n2').value),
    Number(document.getElementById('n3').value),
    Number(document.getElementById('n4').value),
    Number(document.getElementById('n5').value)
  ];

  const maior = Math.max(...valores);
  const menor = Math.min(...valores);

  document.getElementById('resultadoMaiorMenor').innerText =
    "Maior: " + maior + " | Menor: " + menor;
}

function contarParesImpares() {
  let vetor = [];
  for (let i = 0; i < 10; i++) {
    vetor.push(Math.floor(Math.random() * 100) + 1);
  }

  let pares = 0;
  let impares = 0;

  for (let num of vetor) {
    if (num % 2 === 0) pares++;
    else impares++;
  }

  document.getElementById('resultadoParesImpares').innerText =
    "Vetor: " + vetor.join(', ') +
    "\nPares: " + pares + " | Ímpares: " + impares;
}
function inverterVetor() {
  let vetor = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.floor(Math.random() * 100) + 1);
    }

  let vetorInvertido = [];
    for (let i = vetor.length - 1; i >= 0; i--) {
        vetorInvertido.push(vetor[i]);
    }
    document.getElementById('resultadoInverterVetor').innerText =
        "Vetor Original: " + vetor.join(', ') +
        "\nVetor Invertido: " + vetorInvertido.join(', ');
}