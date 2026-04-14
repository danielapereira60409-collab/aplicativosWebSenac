'use server';

export async function dividir(A, B) {
    console.log("Estou Dividindo A por B veja abaixo....");
    
    if (A != "" && B != "") {
        const numA = parseFloat(A);
        const numB = parseFloat(B);

        if (numB === 0) {
            return { error: "Não é possível dividir por zero" };
        }

        const resultado = numA / numB;
        console.log("Resultado da Divisão....:" + resultado.toString());

        return { resultado: resultado.toString() };
    }

    return { error: "Erro ao Dividir" };
}

// teste
async function executarTeste() {
    const resultado = await dividir(30, 10);
    console.log(resultado);
}

// chama para testar
executarTeste();