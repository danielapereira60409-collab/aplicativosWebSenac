'use server';

export async function multiplicar(A, B) {
    console.log("Estou Multiplicando A com B veja abaixo....");
    
    if (A != "" && B != "") {
        const numA = parseFloat(A);
        const numB = parseFloat(B);

        const resultado = numA * numB;
        console.log("Resultado da Multiplicação....:" + resultado.toString());

        return { resultado: resultado.toString() };
    }

    return { error: "Erro ao Multiplicar" };
}

// teste
async function executarTeste() {
    const resultado = await multiplicar(10, 30);
    console.log(resultado);
}

// chama para testar
executarTeste();