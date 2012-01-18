function destaqueJogador1(){
	placarJogador1 = document.getElementById("jogador1").className = "destaque-jogador";
	placarJogador2 = document.getElementById("jogador2").className = "fonte-padrao";

}

function destaqueJogador2(){
	placarJogador2 = document.getElementById("jogador2").className = "destaque-jogador";
	placarJogador1 = document.getElementById("jogador1").className = "fonte-padrao";

}

function selecionarJogadores() {
	var spanJogador1 = document.getElementById("jogador1");
	var spanJogador2 = document.getElementById("jogador2");

	if(!doisJogadores) {
		spanJogador2.innerHTML = "";
		jogador1 = prompt("Nome do Jogador 1");
		if(jogador1 == "" || jogador1 == null)
			jogador1 = "Jogador 1";
	
		spanJogador1.innerHTML = jogador1;
	}
	else {
		jogador1 = prompt("Nome do Jogador 1");
		jogador2 = prompt("Nome do Jogador 2");
		
		if(jogador1 == "" || jogador1 == null)
			jogador1 = "Jogador 1";
		if(jogador2 == "" || jogador2 == null)
			jogador2 = "Jogador 2";
		
		spanJogador1.innerHTML = jogador1;
		spanJogador2.innerHTML = jogador2;
	}
}
