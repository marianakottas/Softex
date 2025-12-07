document.getElementById("btnCalcular").addEventListener("click", () => {
    

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite dois numeros validos !");
        return;
    }

    document.getElementById("soma").textContent = (num1 + num2).toFixed(2);
    document.getElementById("subtracao").textContent = (num1 - num2).toFixed(2);
    document.getElementById("multiplicacao").textContent = (num1 * num2).toFixed(2);
    

    if (num2 !== 0) {
        document.getElementById("divisao").textContent = (num1 / num2).toFixed(2);
        document.getElementById("resto").textContent = num1 % num2;
    } else {
        document.getElementById("divisao").textContent = "Divisão por zero";
        document.getElementById("resto").textContent = "Não aplicavel";
    }
});