"use client";

export default function Produto() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-4">

      <div className="bg-black p-6 rounded-xl shadow-md w-full max-w-sm">

        <h1 className="text-xl font-bold text-center text-blue-500 mb-6">
          Cadastro de Produtos
        </h1>

        {/* Nome */}
        <label className="block text-white mb-1">
          Nome do produto
        </label>
        <input
          type="text"
          placeholder="Digite o nome"
          className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Estoque */}
        <label className="block text-white mb-1">
          Estoque
        </label>
        <input
          type="number"
          placeholder="Digite o estoque"
          className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Código */}
        <label className="block text-white mb-1">
          Código
        </label>
        <input
          type="text"
          placeholder="Digite o código"
          className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Preço */}
        <label className="block text-white mb-1">
          Preço
        </label>
        <input
          type="number"
          placeholder="Digite o preço"
          className="w-full border rounded-md p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botão */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Cadastrar Produto
        </button>

      </div>

    </main>
  );
}