import React, { useState } from "react";
import './App.css';


function App() {
  const [nome, setNome] = useState("");
  const [entrado, setEntrado] = useState(false);

  const handleEntrar = () => {
    if (!nome.trim()) {
      alert("O nome é obrigatório!");
      return;
    }
    setEntrado(true);
  };

  const handleSair = () => {
    setNome("");
    setEntrado(false);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {!entrado ? (
        <>
          <h2>Digite seu nome:</h2>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
          <button onClick={handleEntrar} style={{ marginLeft: "10px" }}>
            Entrar
          </button>
        </>
      ) : (
        <>
          <h2>Bem-vindo(a), {nome}!</h2>
          <button onClick={handleSair}>Sair</button>
        </>
      )}
    </div>
  );
}

export default App;
