"use client";
import { useState } from "react";

export default function Baskara() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [passos, setPassos] = useState([]);

    function calcular() {
        if (a === "" || b === "" || c === "") {
            setPassos(["Preencha todos os campos!"]);
            return;
        }

        const A = Number(a);
        const B = Number(b);
        const C = Number(c);

        if (A === 0) {
            setPassos(["O valor de 'a' não pode ser 0"]);
            return;
        }

        const delta = (B * B) - (4 * A * C);

        let lista = [];

        // Passo 1: mostrar valores
        lista.push(`Equação: ${A}x² + (${B})x + (${C}) = 0`);

        // Passo 2: calcular delta
        lista.push(`Δ = ${B}² - 4·${A}·${C}`);
        lista.push(`Δ = ${delta}`);

        if (delta < 0) {
            lista.push("Não existem raízes reais");
            setPassos(lista);
            return;
        }

        const raizDelta = Math.sqrt(delta);

        // Passo 3: mostrar fórmula aplicada
        lista.push(`x₁ = (-(${B}) + √${delta}) / (2·${A})`);
        lista.push(`x₂ = (-(${B}) - √${delta}) / (2·${A})`);

        const x1 = (-B + raizDelta) / (2 * A);
        const x2 = (-B - raizDelta) / (2 * A);

        // Passo 4: resultado final
        lista.push(`x₁ = ${x1.toFixed(2)}`);
        lista.push(`x₂ = ${x2.toFixed(2)}`);

        setPassos(lista);
    }

    function limpar() {
        setA("");
        setB("");
        setC("");
        setPassos([]);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-gray-500 p-4">

            <div className="bg-white p-6 rounded-2xl shadow-xl w-80">

                <h1 className="text-2xl font-bold text-center mb-4 text-purple-700">
                    Bhaskara
                </h1>

                <input
                    type="number"
                    placeholder="Valor de A"
                    className="w-full p-2 mb-2 border rounded text-black"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor de B"
                    className="w-full p-2 mb-2 border rounded text-black"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor de C"
                    className="w-full p-2 mb-4 border rounded text-black"
                    value={c}
                    onChange={(e) => setC(e.target.value)}
                />

                <button
                    onClick={calcular}
                    className="w-full bg-purple-600 text-white p-2 rounded mb-2"
                >
                    Calcular
                </button>

                <button
                    onClick={limpar}
                    className="w-full bg-gray-400 text-white p-2 rounded"
                >
                    Limpar
                </button>

                <div className="mt-4 text-sm text-black">
                    {passos.map((p, i) => (
                        <p key={i}>👉 {p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}