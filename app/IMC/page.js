"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// estados (controle do formulário) para capturar os Campos com o uso do useState
// e transformamos as variáveis

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  // função de cálculo do IMC
  function calcularIMC() {
    if (peso && altura) {
      const imc = peso / (altura * altura);
      let classificacao;

      // Estrutura Condicional
      if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 25) classificacao = "Peso normal";
      else if (imc < 30) classificacao = "Sobrepeso";
      else classificacao = "Obesidade";

      setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
    }
  }

  // função de Limpar os Campos - Boa prática Dev
  function limpar() {
    //Seta o Resultado abaixo do Botão
    setResultado("");
    //Zera as Variáveis
    setPeso("");
    setAltura("");
  }

  // retorno da Tela
  return (
    <div className="font-sans flex flex-col bg-white items-center justify-center min-h-screen p-8">
      <h1 className="text-center text-xl font-semibold text-orange-500">
        Calculadora de IMC
      </h1>

      <main className="flex flex-col items-center justify-center">

        <div className="bg-black rounded text-white p-4 flex flex-col gap-y-3">

          <label>
            Peso:
            <input
              type="number"
              placeholder="Peso (kg) Ex: 80"
              className="border m-1 p-1 rounded"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </label>

          <label>
            Altura:
            <input
              type="number"
              placeholder="Altura (m) Ex: 1.75"
              className="border m-1 p-1 rounded"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </label>

          <button
            onClick={calcularIMC}
            className="bg-green-500 text-black rounded hover:bg-slate-500 transition font-bold"
          >
            Calcular IMC
          </button>

          <button
            onClick={limpar}
            className="bg-orange-300 text-black rounded hover:bg-slate-500 transition font-bold"
          >
            Limpar
          </button>

          {/* O Recurso Adicional é Muito usado para controlar visibilidade de elementos no FrontEnd */}
          {resultado && (
            <div className="mt-4 p-4 bg-white rounded shadow">
              <p className="text-orange-500">{resultado}</p>
            </div>
          )}

        </div>

       

      </main>
    </div>
  );
}