function dobro(x) {
    return x * 2;
}

function mostrarDobro() {
    const valor = Number(document.getElementById("num").value);
    document.getElementById("resultadoDobro").innerText =
        "Dobro: " + dobro(valor);
}


function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { 
    return b !== 0 ? a / b : "Erro: divisão por zero!";
}

function calcular() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    document.getElementById("resultadosCalc").innerHTML = `
        Soma: ${somar(a,b)} <br>
        Subtração: ${subtrair(a,b)} <br>
        Multiplicação: ${multiplicar(a,b)} <br>
        Divisão: ${dividir(a,b)}
    `;
}


function media(notas) {
    let soma = 0;
    for (let n of notas) soma += n;
    return soma / notas.length;
}

function mostrarMedias() {
    const aluno1 = [8, 7, 9];
    const aluno2 = [10, 6, 8];
    const aluno3 = [5, 9, 7];

    document.getElementById("resultadoMedia").innerHTML = `
        Média Aluno 1: ${media(aluno1)} <br>
        Média Aluno 2: ${media(aluno2)} <br>
        Média Aluno 3: ${media(aluno3)}
    `;
}
