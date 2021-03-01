var dadosVisor = "";
var numero = "";
var termosOp = [undefined, undefined, undefined];
var resultado = undefined;




//CONCATENA VALORES E INSERE NA TELA POR MEIO DA FUNÇÃO "mostrarDadosVisor"
function cliqueBotaoNumero(numeroBotao) {
    numero = numero.concat(numeroBotao.innerHTML)
    mostrarDadosVisor(numeroBotao.innerHTML);
}



// BOTÃO "=" 
function cliqueBotaoResultado() {
    if (termosOp[0] != undefined && termosOp[1] != undefined && numero != "") {
        termosOp[2] = numero;
        var manterResultado;
        switch (termosOp[1]) {
            case '+':
                resultado = Number(termosOp[0]) + Number(termosOp[2]);
                break;
            case '-':
                resultado = Number(termosOp[0]) - Number(termosOp[2]);
                break;
            case '/':
                resultado = Number(termosOp[0]) / Number(termosOp[2]);
                break;
            case '*':
                resultado = Number(termosOp[0]) * Number(termosOp[2]);
                break;
        }
        manterResultado = resultado;
        limparTela();
        mostrarDadosVisor(resultado);
        limparMemoria();
        numero = manterResultado.toString();

    }





}

// VERIFICA REPETIÇÃO DE SINAIS DE OPERAÇÃO
function cliqueBotaoSinalOperacao(op) {
    if (termosOp[1] == undefined) {
        termosOp[0] = numero;
        termosOp[1] = op.innerHTML;
        mostrarDadosVisor(op.innerHTML);
        numero = "";

    }



}



// O BOTÃO "C" SE UTILIZA DESTA FUNÇÃO
function limparTudo() {
    limparMemoria()
    limparTela()
}



// ESTA FUNÇÃO POSSIBILITA OPERAÇÕES SEGUINTES
function limparMemoria() {
    numero = "";
    termosOp = [undefined, undefined, undefined];
    resultado = undefined;
}



function limparTela() {
    dadosVisor = "";
    var visor = document.getElementById('visor')
    visor.value = dadosVisor;
}


function mostrarDadosVisor(conteudo) {
    dadosVisor = dadosVisor.concat(conteudo);
    var visor = document.getElementById('visor');
    visor.value = dadosVisor;
}