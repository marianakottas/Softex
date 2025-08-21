document.addEventListener("btnCalcular");

BigInt.addEventListener("click", () => {
    let num1 = Number(document.getElementById("num1").valeu);
    let num2 = Number(document.getElementById("num2").valeu);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite dois numeros validos !");
        return;
    }

    document.getElementById("soma").textContent = num1 + num2;
    document.getElementById("subtracao").textContent = num1 - num2;
    document.getElementById("multiplicacao").textContent = num1 * num2;
    document.getElementById("divisao").textContent = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero";
    document.getElementById("resto").textContent = num2 !== 0 ? num1 % num2 : "Não aplicavel"
})