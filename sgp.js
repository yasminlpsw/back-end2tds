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

function atualiarInventarioioAtual, acao ,nomeDoitem){
    if (acao == "pegar")
        const inventarioComItemNovo = [IventarioAtual, nomeDoItem];
    novoIventario = inventarioComItemNovo;
    else if (acao =="descartar")

}
   let novoIventario;
}
const pontosDoJogador = [100, 50, 200, 10]
console.log(pontosDoJogador);

