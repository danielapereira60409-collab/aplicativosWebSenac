"use client";
import { useState } from "react";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [status, setStatus] = useState("Pendente");
  const [lista, setLista] = useState([]);
  const [proximoId, setProximoId] = useState(1);

  function adicionarTarefa(e) {
    e.preventDefault();

    if (!tarefa || !data || !hora) {
      alert("Preencha todos os campos!");
      return;
    }

    const nova = {
      id: proximoId,
      tarefa: tarefa,
      data: data,
      hora: hora,
      status: status,
    };

    setLista(lista.concat(nova));
    setProximoId(proximoId + 1);

    setTarefa("");
    setData("");
    setHora("");
    setStatus("Pendente");
  }

  function remover(id) {
    const novaLista = lista.filter(function(item) {
      return item.id !== id;
    });
    setLista(novaLista);
  }

  return (
    <main className="min-h-screen bg-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Minhas Tarefas
        </h1>

        <form onSubmit={adicionarTarefa} className="space-y-4 placeholder:text-gray-500 ">

          <input
            type="text"
            placeholder="Digite a tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            className="w-full border p-2 text-black rounded placeholder:text-black"
          />

          <div className="grid grid-cols-2 gap-4 text-black">
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="border p-2 rounded placeholder:text-gray-500"
            />

            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="border p-2 rounded placeholder:text-gray-500"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded text-black placeholder:text-gray-500"
          >
            <option>Pendente</option>
            <option>Em andamento</option>
            <option>Concluído</option>
          </select>

          <button className="bg-blue-500 text-black px-4 py-2 rounded w-full">
            Adicionar Tarefa
          </button>
        </form>

        <div className="mt-6">
          <h2 className="font-semibold mb-2 text-black">Lista</h2>

          {lista.length === 0 ? (
            <p className="text-gray-500">Nenhuma tarefa cadastrada</p>
          ) : (
            <table className="w-full border text-center">
              <thead className="bg-blue-500 text-black">
                <tr>
                  <th>Tarefa</th>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
              </thead>

              <tbody>
                {lista.map(function(item) {
                  return (
                    <tr key={item.id} className=" text-black border-t">
                      <td>{item.tarefa}</td>
                      <td>{item.data}</td>
                      <td>{item.hora}</td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          onClick={() => remover(item.id)}
                          className="text-red-500"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </main>
  );
}