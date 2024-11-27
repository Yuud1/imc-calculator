import React, { useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    if (!altura || !peso) {
      setResultado("Por favor, preencha todos os campos.");
      return;
    }

    const alturaEmMetros = altura / 100; // Converter cm para metros
    const imc = (peso / (alturaEmMetros ** 2)).toFixed(2); // Cálculo do IMC com duas casas decimais

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    setResultado(`Seu IMC é ${imc} (${classificacao}).`);
  };

  return (
    <div className="formulario-container">
      <h1>Calculadora IMC</h1>
      <form className="formulario" onSubmit={calcularIMC}>
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="number"
          id="altura"
          placeholder="Digite sua altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          placeholder="Digite seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button type="submit" className="botao">
          Calcular
        </button>
      </form>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

export default Formulario;
