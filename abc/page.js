"use client";
import { useState } from "react";
import Link from "next/link";

export default function SomaTres() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [resultado, setResultado] = useState("");

    function somar() {
        if (!a || !b || !c) {
            alert("Preencha todos os campos!");
            return;
        }

        const soma = Number(a) + Number(b) + Number(c);
        setResultado(soma);
    }

    function mostrarResultado() {
        if (resultado === "") {
            alert("Clique em Somar primeiro!");
            return;
        }

        alert("O resultado é: " + resultado);
    }

    function limpar() {
        setA("");
        setB("");
        setC("");
        setResultado("");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-black p-6 rounded-2xl shadow-lg w-80 text-center">
                <h1 className="text-xl font-bold mb-4">Soma de 3 valores</h1>

                <input
                    type="number"
                    placeholder="Valor A"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <input
                    type="number"
                    placeholder="Valor B"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <input
                    type="number"
                    placeholder="Valor C"
                    value={c}
                    onChange={(e) => setC(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <div className="flex justify-between gap-2">
                    <button
                        onClick={somar}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                    >
                        Somar
                    </button>

                   

                    <button
                        onClick={limpar}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                    >
                        Limpar
                    </button>
                </div>

                <h3 className="mt-4 font-semibold">
                    Resultado: {resultado}
                </h3>
            </div>
        </div>
    );
}