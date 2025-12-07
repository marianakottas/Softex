// Este arquivo deve ser salvo como 'script.js'

document.getElementById("btnCalcular").addEventListener("click", () => {
    
    // Pega o valor dos inputs e converte para número
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    // Validação básica
    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite dois numeros validos !");
        return;
    }

    // Cálculos e formatação dos resultados
    document.getElementById("soma").textContent = (num1 + num2).toFixed(2);
    document.getElementById("subtracao").textContent = (num1 - num2).toFixed(2);
    document.getElementById("multiplicacao").textContent = (num1 * num2).toFixed(2);
    
    // Tratamento para divisão por zero
    if (num2 !== 0) {
        document.getElementById("divisao").textContent = (num1 / num2).toFixed(2);
        document.getElementById("resto").textContent = num1 % num2;
    } else {
        document.getElementById("divisao").textContent = "Divisão por zero";
        document.getElementById("resto").textContent = "Não aplicavel";
    }
});