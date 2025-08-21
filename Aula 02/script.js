function apresentar() {
    let nome = "Mariana";
    let hobby = "assistir série";

    const paragrafo = document.getElementById("mensagem");
    paragrafo.textContent = "Olá, eu sou " + nome + " e gosto muito de " + hobby + "!";
}