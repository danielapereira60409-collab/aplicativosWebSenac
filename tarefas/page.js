"use client";
import { useState } from "react";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [status, setStatus] = useState("Pendente");
  const [lista, setLista] = useState([]);

  function adicionarTarefa(e) {
    e.preventDefault();

    if (!tarefa || !data || !hora) {
      alert("Preencha todos os campos!");
      return;
    }

    const nova = {
      id: Date.now(),
      tarefa,
      data,
      hora,
      status,
    };

    setLista([...lista, nova]);

    // limpar
    setTarefa("");
    setData("");
    setHora("");
    setStatus("Pendente");
  }

  function remover(id) {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
  }

  return (
    <main className="min-h-screen bg-gray-500 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-black p-6 rounded-xl shadow">

        {/* Título */}
        <h1 className="text-2xl font-bold mb-2">Minhas Tarefas</h1>
        <p className="text-gray-500 mb-6">
          Gerencie suas tarefas de forma simples
        </p>

        {/* Formulário */}
        <form onSubmit={adicionarTarefa} className="space-y-4">

          <div>
            <label className="block font-medium">Tarefa</label>
            <input
              type="text"
              placeholder="Descreva a tarefa..."
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Data</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label>Horário</label>
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <div>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option>Pendente</option>
              <option>Em andamento</option>
              <option>Concluído</option>
            </select>
          </div>

          <button className="bg-blue-500 text-black px-4 py-2 rounded">
            + Adicionar
          </button>
        </form>

        {/* Lista */}
        <div className="mt-8">
          <h2 className="font-semibold mb-2">Tarefas cadastradas</h2>

          <table className="w-full text-left border">
            <thead className="bg-gray-500">
              <tr>
                <th className="p-2">Tarefa</th>
                <th className="p-2">Data</th>
                <th className="p-2">Hora</th>
                <th className="p-2">Status</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>

            <tbody>
              {lista.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.tarefa}</td>
                  <td className="p-2">{item.data}</td>
                  <td className="p-2">{item.hora}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">
                    <button
                      onClick={() => remover(item.id)}
                      className="text-red-500"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </main>
  );
}
