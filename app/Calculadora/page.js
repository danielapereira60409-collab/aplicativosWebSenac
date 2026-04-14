"use client";
import { useState } from "react";

export default function Calculadora() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");

  function verificar() {
    if (valor1 === "" || valor2 === "") {
      alert("Preencha os dois valores!");
      return false;
    }
    return true;
  }

  function somar() {
    if (!verificar()) return;
    setResultado(Number(valor1) + Number(valor2));
  }

  function subtrair() {
    if (!verificar()) return;
    setResultado(Number(valor1) - Number(valor2));
  }

  function multiplicar() {
    if (!verificar()) return;
    setResultado(Number(valor1) * Number(valor2));
  }

  function dividir() {
    if (!verificar()) return;
    if (Number(valor2) === 0) {
      alert("Não pode dividir por zero!");
      return;
    }
    setResultado(Number(valor1) / Number(valor2));
  }

  function limpar() {
    setValor1("");
    setValor2("");
    setResultado("");
  }

  return (
    <main className="bg-gray-800 flex items-center justify-center h-screen">
      
      <div className="bg-white p-8 rounded-xl w-80 shadow-lg text-center">
        <h1 className="text-xl text-black font-bold mb-5">Calculadora</h1>

        <input
          type="number"
          placeholder="Valor 1"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          className="w-full mb-3 p-2 border text-black rounded-md "
        />

        <input
          type="number"
          placeholder="Valor 2"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md text-black"
        />

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button onClick={somar} className="bg-green-500 text-white p-2 rounded-md">+</button>
          <button onClick={subtrair} className="bg-red-500 text-white p-2 rounded-md">-</button>
          <button onClick={multiplicar} className="bg-blue-500 text-white p-2 rounded-md">*</button>
          <button onClick={dividir} className="bg-yellow-500 text-white p-2 rounded-md">/</button>
        </div>

        <button
          onClick={limpar}
          className="w-full bg-gray-500 p-2 rounded-md mb-4"
        >
          Limpar
        </button>

        <div className="bg-black p-3 rounded-md">
          <strong>Resultado:</strong> {resultado}
        </div>
      </div>

    </main>
  );
}