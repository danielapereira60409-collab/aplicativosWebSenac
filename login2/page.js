import Link from "next/link"
export default function Login1() {
      return (
    <div class="h-screen">
  <div class="grid h-full grid-cols-[1fr_200px] grid-rows-[80px_1fr_60px]">
 
    <header div class="col-span-2 flex items-center justify-center bg-blue-500 text-xl font-bold text-white">
      Senac - Curso de Aplicativos Web  </header>
 
    <main class="bg-gray-400 flex p-4">
      <h1 class="mb-4 text-white items-center justify-center text-2xl font-bold">Conteúdo </h1>
    </main>
 
    <aside class="row-span-2 bg-gray-800 p-4 text-white">
      <nav class="flex flex-col gap-2">
      <Link href="/Cliente" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Cliente</Link>
      <Link href="/Produto" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center">  Produto</Link>
      <Link href="/Fornecedores" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center">Fornecedores</Link>
      <Link href="/IMC" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center">IMC</Link>
      <Link href="/ficha" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> ficha</Link>
      <Link href="/abc" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> abc</Link>
      <Link href="/Calculadora" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Calculadora</Link>
      <Link href="/Baskara" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Bhaskara</Link>
      <Link href="/ConverterCelsius" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Converter Celsius</Link>
      <Link href="/idade" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Calcular Idade</Link>
      <Link href="/tarefas" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Tarefas</Link>
      </nav>
    </aside>
 
    <footer class="col flex items-center justify-center bg-gray-900 text-white">
      <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Voltar </Link>
    </footer>
 
  </div>
</div>
  );
}