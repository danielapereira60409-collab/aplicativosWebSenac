"use client";
import { useState } from "react";
import Link from "next/link";

export default function CalcularIdade() {
  const [ano, setAno] = useState("");
  const [idade, setIdade] = useState("");
  const [erro, setErro] = useState("");

  function calcular() {
    if (!ano) {
      setErro("Digite o ano de nascimento!");
      setIdade("");
      return;
    }

    const anoAtual = new Date().getFullYear();
    const resultado = anoAtual - parseInt(ano);

    setIdade(`Você tem ${resultado} anos`);
    setErro("");
  }

  function limpar() {
    setAno("");
    setIdade("");
    setErro("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-black p-8 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Calcular Idade
        </h1>

        <input
          type="number"
          placeholder="Ano de nascimento"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {erro && (
          <p className="text-red-500 text-sm mb-2">{erro}</p>
        )}

        <div className="flex gap-3">
          <button
            onClick={calcular}
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Calcular
          </button>

          <button
            onClick={limpar}
            className="w-full bg-gray-400 text-white py-2 rounded-xl hover:bg-gray-500 transition"
          >
            Limpar
          </button>
        </div>

        {idade && (
          <p className="mt-5 text-center text-lg font-semibold text-gray-700">
            {idade}
          </p>
        )}
      </div>
    </div>
  );
}