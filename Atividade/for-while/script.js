function mostrarTabuada() {
    const num = Number(document.getElementById("tabNum").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}<br>`;
    }

    document.getElementById("resultadoTabuada").innerHTML = resultado;
}



function contagemRegressiva() {
    let n = 10;

    while (n >= 1) {
        console.log(n);
        n--;
    }
}



function somatorio() {
    let soma = 0;
    let numero = Number(prompt("Digite um número (0 para encerrar):"));

    while (numero !== 0) {
        soma += numero;
        numero = Number(prompt("Digite outro número (0 para encerrar):"));
    }

    document.getElementById("resultadoSomatorio").innerText =
        "Somatório final: " + soma;
}
