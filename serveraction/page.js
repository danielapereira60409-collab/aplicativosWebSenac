"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cliente from "../Cliente/page";

export default function ServerAction() {
  const router = useRouter();

  async function Cliente() {

    try {

      console.clear()
      console.log("\n\n");
      console.log("Console limpo e ação executada no Frontend");

      console.log("Estou no Cliente....:" + contador++);
      console.log("Só funciona no Frontend meu amigo....");
      console.log("\n\n");

    } catch {
      console.log("Erro ao Tentar Logar 2");

    } finally {

      console.log("Fim de execução da Action no Front End");
    }
  }

  async function ChamaServidor(e) {
    e.preventDefault();

    try {
      //chamando o Servidor para executar alguma Ação
      await servidor();
      console.log("Chamou o Servidor")
    } catch {
      //roda onde?
      console.log("Erro ao Tentar Logar 2")
    } finally {
      //roda onde?
      console.log("Login Terminou")
    }
  }


  return (
    <main className="bg-gray-800 flex items-center justify-center h-screen relative">

      <div className="bg-white border-4 border-blue-400 rounded-xl p-8 w-80 text-center shadow-lg">

        <h1 className="text-xl text-black font-semibold mb-6">Server Action</h1>

        <button
          onClick={ChamaServidor}
          type="button"


          className="w-full bg-green-600 text-white py-2 rounded-md mb-3 hover:bg-green-700 transition"
        >
          Ações no Servidor (Back-END)
        </button>

        <button
          onClick={Cliente}

          className="w-full bg-blue-600 text-white py-2 rounded-md mb-3 hover:bg-blue-700 transition"
        >
          Ações no Cliente (Front-END)
        </button>

        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Dashboard
        </button>

      </div>

      <footer className="absolute bottom-5 text-gray-400 text-sm text-center w-full">
        © 2026 danielapereira60409@gmail.com <br />
        Todos os direitos reservados.
      </footer>

    </main>
  );
}
