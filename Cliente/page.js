"use client";

export default function Cliente() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-black p-6 rounded-xl shadow-md w-full max-w-sm">
        
        <h1 className="text-xl font-bold text-center text-blue-500 mb-6">
          Cadastro de Clientes
        </h1>

        {/* Nome */}
        <label className="block text-white mb-1">Nome</label>
        <input
          type="text"
          placeholder="Digite o nome"
          className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* CPF */}
        <label className="block text-white mb-1">CPF</label>
        <input
          type="text"
          placeholder="Digite o CPF"
          className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Telefone */}
        <label className="block text-white mb-1">Telefone</label>
        <input
          type="text"
          placeholder="Digite o telefone"
          className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Endereço */}
        <label className="block text-white mb-1">Endereço</label>
        <input
          type="text"
          placeholder="Digite o endereço"
          className="w-full border rounded-md p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botão */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Cadastrar
        </button>

      </div>

    </main>
  );
}