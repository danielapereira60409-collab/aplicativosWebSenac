"use client";
import { useState } from "react";
import Link from "next/link";

export default function FichaAluno() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [idade, setIdade] = useState("");

    function enviar() {
        alert(nome + " - " + email + " - " + telefone + " - " + idade);
    }

    function limpar() {
        setNome("");
        setEmail("");
        setTelefone("");
        setIdade("");
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-700">

            <div className="flex gap-10">

                {/* FORMULÁRIO */}
                <div className="bg-white text-black p-5 rounded w-64 flex flex-col gap-2">
                    <h2 className="text-orange-400 text-center mb-2">
                        Ficha do Aluno
                    </h2>

                    <input
                        type="text"
                        placeholder="Nome"
                        className="border p-2 rounded"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Telefone"
                        className="border p-2 rounded"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Idade"
                        className="border p-2 rounded"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />

                    <button
                        onClick={enviar}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Enviar
                    </button>

                    <button
                        onClick={limpar}
                        className="bg-orange-400 p-2 rounded"
                    >
                        Limpar
                    </button>
                </div>

                {/* CAIXA LATERAL */}
                <div className="bg-white text-black p-5 rounded w-64">
                    <h2 className="text-orange-400 text-center mb-2">
                        Dados Digitados
                    </h2>

                    <p><strong>Nome:</strong> {nome}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Telefone:</strong> {telefone}</p>
                    <p><strong>Idade:</strong> {idade}</p>
                </div>

            </div>

        </div>
    );
}