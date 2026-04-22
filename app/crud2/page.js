
"use client";

import { useState } from "react";

export default function Home() {

    const [alunos, setAlunos] = useState([]);

    const [form, setForm] = useState({
        nome: "",
        email: "",
        celular: "",
        curso: ""
    });

    const [editIndex, setEditIndex] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function limparCampos() {
        setForm({
            nome: "",
            email: "",
            celular: "",
            curso: ""
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.nome || !form.email || !form.celular || !form.curso) {
            alert("Preencha todos os campos!");
            return;
        }

        const novoAluno = { ...form };

        setAlunos((prev) => {
            const novos = [...prev];

            if (editIndex !== null) {
                novos[editIndex] = novoAluno;
            } else {
                novos.push(novoAluno);
            }

            return novos;
        });

        setEditIndex(null);
        limparCampos();
    }

    function handleEdit(index) {
        setForm(alunos[index]);
        setEditIndex(index);
    }

    function handleDelete(index) {
        setAlunos((prev) => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
            
            <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-lg p-6">

                <h1 className="text-xl font-bold mb-4">
                    CRUD com Array
                </h1>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 mb-4">

                    <input
                        name="nome"
                        placeholder="Nome"
                        value={form.nome}
                        onChange={handleChange}
                        className="bg-gray-700 p-2 rounded outline-none"
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-gray-700 p-2 rounded outline-none"
                    />

                    <input
                        name="celular"
                        placeholder="Celular"
                        value={form.celular}
                        onChange={handleChange}
                        className="bg-gray-700 p-2 rounded outline-none"
                    />

                    <input
                        name="curso"
                        placeholder="Curso"
                        value={form.curso}
                        onChange={handleChange}
                        className="bg-gray-700 p-2 rounded outline-none"
                    />

                    <button
                        type="submit"
                        className="col-span-2 bg-gradient-to-r from-blue-400 to-cyan-300 text-black font-semibold p-2 rounded hover:opacity-90"
                    >
                        {editIndex !== null ? "Atualizar" : "Cadastrar"}
                    </button>

                </form>

                {/* TABELA */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">

                        <thead>
                            <tr className="bg-gray-700 text-gray-300">
                                <th className="p-2">Nome</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Celular</th>
                                <th className="p-2">Curso</th>
                                <th className="p-2">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {alunos.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center p-4 text-gray-400">
                                        Nenhum aluno cadastrado
                                    </td>
                                </tr>
                            ) : (
                                alunos.map((aluno, index) => (
                                    <tr key={index} className="border-b border-gray-700">

                                        <td className="p-2">{aluno.nome}</td>
                                        <td className="p-2">{aluno.email}</td>
                                        <td className="p-2">{aluno.celular}</td>
                                        <td className="p-2">{aluno.curso}</td>

                                        <td className="p-2 flex gap-2">

                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="border border-gray-400 px-2 py-1 rounded hover:bg-gray-600"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="border border-red-400 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
                                            >
                                                Deletar
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
}