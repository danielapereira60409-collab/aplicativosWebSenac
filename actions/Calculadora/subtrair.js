'use server';

export async function subtrair(A, B) {
    console.log("Estou Subtraindo A com B veja abaixo....");
    
    if (A != "" && B != "") {
        const numA = parseFloat(A);
        const numB = parseFloat(B);

        const resultado = numA - numB;
        console.log("Resultado da Subtração....:" + resultado.toString());

        return { resultado: resultado.toString() };
    }

    return { error: "Erro ao Subtrair" };
}

// teste
async function executarTeste() {
    const resultado = await subtrair(30, 10);
    console.log(resultado);
}

// chama para testar
executarTeste();