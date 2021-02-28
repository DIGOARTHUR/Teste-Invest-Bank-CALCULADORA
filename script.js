var dadosVisor = "";
var numero = "";
var termosOp = [undefined, undefined, undefined];
var resultado = undefined;



function cliqueBotaoNumero(numeroBotao) {
    numero = numero.concat(numeroBotao.innerHTML)
    mostrarDadosVisor(numeroBotao.innerHTML);
}

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

function cliqueBotaoSinalOperacao(op) {
    if (termosOp[1] == undefined) {
        termosOp[0] = numero;
        termosOp[1] = op.innerHTML;
        mostrarDadosVisor(op.innerHTML);
        numero = "";

    }



}




function limparTudo() {
    limparMemoria()
    limparTela()
}


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