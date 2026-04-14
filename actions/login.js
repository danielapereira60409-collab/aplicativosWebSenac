"use server";

import { redirect } from "next/navigation";

export async function login(usuário, senha) {

    console.log("Estou no servidor");

    if (usuário === "admin" && senha === "123") {

        console.log("Login bem-sucedido");

        redirect("/login2");

    }

    return { error: "Usuário ou senha inválidos" };

}