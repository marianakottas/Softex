import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Meu Contador</h1>
      <p className="text">Clique para aumentar ou diminuir o valor.</p>

      <div className="spacer"></div>

      {}
      <div key={count} className="count neon">
        {count}
      </div>

      <div className="buttons">
        <button className="button" onClick={() => setCount(count + 1)}>
          Aumentar
        </button>

        <button
          className="button ghost"
          onClick={() => setCount(count - 1)}
        >
          Diminuir
        </button>
      </div>
    </div>
  );
}
