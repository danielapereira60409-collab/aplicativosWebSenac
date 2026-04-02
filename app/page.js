import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">

      {/* Header */}
      <div className="w-full max-w-md bg-red-500 rounded-xl py-4 shadow-md">
        <h1 className="text-center text-white text-2xl font-bold">
          Home
        </h1>
      </div>

      {/* Texto */}
      <p className="mt-4 text-gray-300 text-center">
        Seja bem-vindo! Aplicativos Web do Curso Senac 2026/Turma 027
      </p>

      {/* Links */}
      <div className="mt-6 w-full max-w-md flex flex-col gap-3">

        <Link href="/Produto" className="bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition">
          Cadastro de Produtos
        </Link>

        <Link href="/Cliente" className="bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition">
          Cadastro de Clientes
        </Link>

        <Link href="/Fornecedores" className="bg-purple-500 text-white text-center py-2 rounded-lg hover:bg-purple-600 transition">
          Cadastro de Fornecedores
        </Link>

        <Link href="/IMC" className="bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600 transition">
          Calcular IMC
        </Link>

        <Link href="/idade" className="bg-pink-500 text-white text-center py-2 rounded-lg hover:bg-pink-600 transition">
          Calcular Idade
        </Link>

        <Link href="/ficha" className="bg-red-600 text-white text-center py-2 rounded-lg hover:bg-red-700 transition">
          Ficha de Cadastro
        </Link>
      <Link href="/crud" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-600 transition">
          CRUD de Alunos
        </Link>
      </div>
    </main>
  );
}
