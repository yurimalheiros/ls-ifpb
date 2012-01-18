function mostrarResultado() {
	var resultado = document.getElementById("resultado");
	if(ptsJogador1 > ptsJogador2)
		resultado.innerHTML = jogador1 + " venceu o jogo!";
	else if(ptsJogador1 < ptsJogador2)
		resultado.innerHTML = jogador2 + " venceu o jogo!";
	else
		resultado.innerHTML = "O Jogo terminou empatado!";
	
	var divFimDeJogo = document.getElementById("fim-de-jogo");
	divFimDeJogo.style.display = "block";
}

function apagarResultado() {
	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "";
	var t1 = document.getElementById("tentativas-j1");
	t1.innerHTML = "";
	var t2 = document.getElementById("tentativas-j2");
	t2.innerHTML = "";
	var tempo = document.getElementById("tempo");
	tempo.innerHTML = "";
	
	ptsJogador1 = 0;
	ptsJogador2 = 0;
	tentativasJ1 = 0;
	tentativasJ2 = 0;
}

function atualizarPlacar() {
	placarJogador1 = document.getElementById("pts-jogador1");
	placarJogador1.innerHTML = ptsJogador1 + " pontos";
	if(doisJogadores) {
		placarJogador2 = document.getElementById("pts-jogador2");
		placarJogador2.innerHTML = ptsJogador2 + " pontos";
	}
	else {
		placarJogador2 = document.getElementById("pts-jogador2");
		placarJogador2.innerHTML = "";
	}
}
		
function novoJogo() {
	qtdCartas = document.getElementsByTagName("td");
	for(var i=0; i<qtdCartas.length; i++)
		qtdCartas[i].firstChild.setAttribute("src", cartaPadrao);
	pares = qtdCartas.length;
	if(quantidade != null)
		embaralharCartas(quantidade, temaSelecionado);
	is_segunda = false;
	apagarResultado();
	atualizarPlacar();
	if(is_X4)
		pares = 8;
	else
		pares = 18;
	
	tempoInicio = new Date();
	var divFimDeJogo = document.getElementById("fim-de-jogo");
	divFimDeJogo.style.display = "none";
	
}

function selecionarTema() {
		var selecao_tema = document.getElementById("selecao-tema");
		
		if(selecao_tema.value == 1) {
			temaSelecionado = selecao_tema.value;
			novoJogo();
			embaralharCartas(quantidade, temaSelecionado);
		}
		else if(selecao_tema.value == 2) {
			temaSelecionado = selecao_tema.value;
			novoJogo();
			embaralharCartas(quantidade, temaSelecionado);
		}
}

// MENUS
function goMenu1() {
	var menu1 = document.getElementById("menu");
	var menu2 = document.getElementById("menu2");
	var menu3 = document.getElementById("menu3");
	var mesa = document.getElementById("mesa-de-jogo");
	
	desmontarMesa();

	menu1.style.display = "block";
	menu2.style.display = "none";
	menu3.style.display = "none";
	mesa.style.display = "none";

}

function goMenu2() {
	var menu1 = document.getElementById("menu");
	var menu2 = document.getElementById("menu2");
	var menu3 = document.getElementById("menu3");
	menu1.style.display = "none";
	menu2.style.display = "block";
	menu3.style.display = "none";

	novoJogo();

}

function goMenu3() {
	var menu1 = document.getElementById("menu");
	var menu2 = document.getElementById("menu2");
	var menu3 = document.getElementById("menu3");
	menu1.style.display = "none";
	menu2.style.display = "none";
	menu3.style.display = "block";

}

function tabuleiroX4() {
	var mesa = document.getElementById("mesa-de-jogo");
	var menu1 = document.getElementById("menu");
	var menu2 = document.getElementById("menu2");
	var menu3 = document.getElementById("menu3");

	mesa.style.width = "800px";

	menu1.style.display = "none";
	menu2.style.display = "none";
	menu3.style.display = "none";
	mesa.style.display = "block";

	is_X4 = true;
	is_X6 = false;
	quantidade = 16;
	embaralharCartas(quantidade, temaSelecionado);
	montarMesa(16);
	atualizarPlacar();
	destaqueJogador1();
	pares = 8
}

function tabuleiroX6() {
	var mesa = document.getElementById("mesa-de-jogo");
	var menu1 = document.getElementById("menu");
	var menu2 = document.getElementById("menu2");
	var menu3 = document.getElementById("menu3");
	
	mesa.style.width = "1300px";

	menu1.style.display = "none";
	menu2.style.display = "none";
	menu3.style.display = "none";
	mesa.style.display = "block";
	
	is_X6 = true;
	is_X4 = false;
	quantidade = 36;
	embaralharCartas(quantidade, temaSelecionado);
	montarMesa(36);
	atualizarPlacar();
	destaqueJogador1();
	pares = 18;
}

function montarMesa(tamanhoDaMesa) {

	var mesa = document.getElementById("cartas");
	var tabela = document.createElement("table");
	
	if(tamanhoDaMesa == 16){
		numLinhas = 4;
		numColunas = 4;
	}
	else {
		numLinhas = 4;
		numColunas = 9;
	}
	var countId = 0;
	mesa.appendChild(tabela);
	for (var linha=1;linha<=numLinhas;linha++){
		var tr = document.createElement("tr");
		tabela.appendChild(tr);
		for(var coluna=1; coluna<=numColunas; coluna++){ 
			var td = document.createElement("td");
			td.addEventListener("click", virarCarta, false);
			td.id = countId;
			var carta = document.createElement("img");
			carta.src = cartaPadrao;
			td.appendChild(carta);
			tr.appendChild(td);
			countId++;
		}
	}
	tempoInicio = new Date();
}

// REMOVE A TAG 'TABLE' COM AS CARTAS
function desmontarMesa() {
	var divCartas = document.getElementById("cartas");
	var tableCartas = document.getElementsByTagName("table")[0];
	if(tableCartas)
		divCartas.removeChild(tableCartas);
}

function estatisticas() {
	var tempoFim = new Date();
	var segundos = parseInt((tempoFim.getTime() - tempoInicio.getTime())/1000);
	var minutos = 0;
	var spanTempo = document.getElementById("tempo");
	var spanT1 = document.getElementById("tentativas-j1");
	var spanT2 = document.getElementById("tentativas-j2");
	
	// DIVISÃO DOS SEGUNDO EM MINUTOS OU NÃO
	while(segundos >= 60){
		segundos -= 60;
		minutos ++;
	}
	
	var t1 = document.createTextNode(jogador1 + ": " + tentativasJ1);
	var t2 = document.createTextNode(jogador2 + ": " + tentativasJ2);
	
	
	if(doisJogadores){
		spanT1.appendChild(t1);
		spanT2.appendChild(t2);
	}
	else
		spanT1.appendChild(t1);
	
	spanTempo.innerHTML = minutos + "m" + segundos + "s";
	
}

// EVENTOS DE MENU
function main(){

	var btn_Play = document.getElementById("play");
	btn_Play.addEventListener("click", goMenu2, false);
	
	var btn_Voltar = document.getElementById("voltar1");
	btn_Voltar.addEventListener("click", goMenu1, false);
	
	var btn_Voltar2 = document.getElementById("voltar2");
	btn_Voltar2.addEventListener("click", goMenu2, false);
	
	var btn_UmJogador = document.getElementById("um-jogador");
	btn_UmJogador.addEventListener("click", goMenu3, false);
	btn_UmJogador.addEventListener("click", function(){
									doisJogadores = false;
									selecionarJogadores();
									}
									, false);

	
	var btn_DoisJogadores = document.getElementById("dois-jogadores");
	btn_DoisJogadores.addEventListener("click", goMenu3, false);
	btn_DoisJogadores.addEventListener("click", function() {
										doisJogadores = true;
										selecionarJogadores();
										}
										, false);
	
	var btn_x6 = document.getElementById("x6");
	btn_x6.addEventListener("click", tabuleiroX6, false);
	
	var btn_x4 = document.getElementById("x4");
	btn_x4.addEventListener("click", tabuleiroX4, false);

	var btn_backMenu = document.getElementById("back-menu");
	btn_backMenu.addEventListener("click", goMenu1, false);
	
	var btn_resetar = document.getElementById("resetar");
	btn_resetar.addEventListener("click", novoJogo, false);
	
	var selecao_tema = document.getElementById("selecao-tema");
	selecao_tema.addEventListener("change", selecionarTema, false);
	
	var btn_instrucoes = document.getElementById("instrucoes");
	btn_instrucoes.addEventListener("click", function() {alert("Se sua mem\u00f3ria j\u00e1 foi afetada e n\u00e3o lembra mais como se jogar um jogo da mem\u00f3ria, aqui vai algumas instru\u00e7\u00f5es:\n Clique em uma carta e tente encontrar o seu par.\n O jogo termina quando todos os pares forem descobertos.");} , false);
	

}
window.addEventListener("load", main, false);

// VARIÁVEIS GLOBAIS - JOGO

var is_segunda = false;
var pares;
var quantidade;
var primeiraCarta;
var segundaCarta;
var cartaPadrao = "images/carta.png";
var esperar = 0;
var tempoInicio;
var tamanhoMesa;
var is_X4 = false;
var is_X6 = false;
var temaSelecionado = 1;

// VARIÁVEIS GLOBAIS - JOGADORES

var jogador1;
var jogador2;
var ptsJogador1 = 0;
var ptsJogador2 = 0;
var tentativasJ1 = 0;
var tentativasJ2 = 0;
var is_jogador2 = false;
var doisJogadores = false;
