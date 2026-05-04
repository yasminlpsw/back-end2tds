// SISTEMA DE GERENCIAMENTO DE PERSONAGEM
// SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function (acumulador, pontosDaFase) { 
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMiossoes) {
    const verificarStatusDaMissao = function(missao) { 
        const foiFinalizada = missao.status === "concluidas"; //=== igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualiarInventarioioAtual acao ,nomeDoitem) {
    if (acao == "pegar")
        const inventarioComItemNovo = [IventarioAtual, nomeDoItem];
    novoInventario = inventarioComItemNovo;
    else if (acao =="descartar") {
        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
        novoIventario = inventarioAtual;
    }
    return novoInventario; //Retornar a mochila do jogador atualizada


};
   let novoIventario;
}
const pontosDoJogador = [100, 50, 200, 10]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuacao final" ,total);

const missoes = [
    {nome: "Salvar a aldeia", status: "concluída"},
    {nome:  "Encontrar o mapa, status "em andamento"},
]

