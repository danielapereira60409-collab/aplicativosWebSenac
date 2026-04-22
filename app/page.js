import Link from "next/link";

export default function () {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">

      {/* Header */}
      <div className="w-full max-w-md bg-blue-500 rounded-xl py-4 shadow-md">
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

        <Link href="/Produto" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Cadastro de Produtos
        </Link>

        <Link href="/Cliente" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Cadastro de Clientes
        </Link>

        <Link href="/tarefas" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Gerenciador de Tarefas
        </Link>

        <Link href="/Fornecedores" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Cadastro de Fornecedores
        </Link>

        <Link href="/IMC" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Calcular IMC
        </Link>

        <Link href="/idade" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Calcular Idade
        </Link>

        <Link href="/ficha" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Ficha de Cadastro
        </Link>
      <Link href="/crud" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          CRUD de Alunos
        </Link>
      <Link href="/ConverterCelsius" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          Converter Celsius
        </Link>

        <Link href="/crud2" className="bg-gray-500 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
          CRUD com Array
        </Link>
      </div>
    </main>
  );
}
