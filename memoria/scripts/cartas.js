function embaralharCartas(quantidade, tema) {
	
	if(quantidade == 36){
		 if(tema == 1)
			cartas = new Array("images/browsers/arora.png", "images/browsers/chrome.png", "images/browsers/cometbird.png", "images/browsers/epic.png", "images/browsers/firefox.png", "images/browsers/firefoxaurora.png", "images/browsers/flock.png", "images/browsers/ie6.png", "images/browsers/ie9.png", "images/browsers/kmeleon.png", "images/browsers/konqueror.png", "images/browsers/maxthon.png", "images/browsers/msnexplorer.png", "images/browsers/netscape.png", "images/browsers/opera.png", "images/browsers/orca.png", "images/browsers/rockmelt.png", "images/browsers/safari.png", "images/browsers/arora.png", "images/browsers/chrome.png", "images/browsers/cometbird.png", "images/browsers/epic.png", "images/browsers/firefox.png", "images/browsers/firefoxaurora.png", "images/browsers/flock.png", "images/browsers/ie6.png", "images/browsers/ie9.png", "images/browsers/kmeleon.png", "images/browsers/konqueror.png", "images/browsers/maxthon.png", "images/browsers/msnexplorer.png", "images/browsers/netscape.png", "images/browsers/opera.png", "images/browsers/orca.png", "images/browsers/rockmelt.png", "images/browsers/safari.png");
		else if(tema == 2)
			cartas = new Array("images/paises/albania.png", "images/paises/argentina.png", "images/paises/brasil.png", "images/paises/espanha.png", "images/paises/estonia.png", "images/paises/franca.png", "images/paises/guatemala.png", "images/paises/holanda.png", "images/paises/jamaica.png", "images/paises/japao.png", "images/paises/moldova.png", "images/paises/namibia.png", "images/paises/panama.png", "images/paises/sriLanka.png", "images/paises/tanzania.png", "images/paises/uganda.png", "images/paises/uzbequistao.png", "images/paises/zimbabue.png", "images/paises/albania.png", "images/paises/argentina.png", "images/paises/brasil.png", "images/paises/espanha.png", "images/paises/estonia.png", "images/paises/franca.png", "images/paises/guatemala.png", "images/paises/holanda.png", "images/paises/jamaica.png", "images/paises/japao.png", "images/paises/moldova.png", "images/paises/namibia.png", "images/paises/panama.png", "images/paises/sriLanka.png", "images/paises/tanzania.png", "images/paises/uganda.png", "images/paises/uzbequistao.png", "images/paises/zimbabue.png");
	
	}
	
	else if(quantidade == 16){
		 if(tema == 1)
		 	cartas = new Array("images/browsers/chrome.png", "images/browsers/firefox.png", "images/browsers/firefoxaurora.png","images/browsers/ie9.png", "images/browsers/msnexplorer.png", "images/browsers/netscape.png", "images/browsers/opera.png", "images/browsers/safari.png", "images/browsers/chrome.png", "images/browsers/firefox.png", "images/browsers/firefoxaurora.png","images/browsers/ie9.png", "images/browsers/msnexplorer.png", "images/browsers/netscape.png", "images/browsers/opera.png", "images/browsers/safari.png");
			
		else if(tema == 2)
		 	cartas = new Array("images/paises/albania.png", "images/paises/argentina.png", "images/paises/brasil.png", "images/paises/espanha.png", "images/paises/franca.png", "images/paises/holanda.png", "images/paises/jamaica.png", "images/paises/japao.png", "images/paises/albania.png", "images/paises/argentina.png", "images/paises/brasil.png", "images/paises/espanha.png", "images/paises/franca.png", "images/paises/holanda.png", "images/paises/jamaica.png", "images/paises/japao.png");
			
	}
	cartas.sort(function(){ return 0.5 - Math.round(Math.random())});
}

function virarCarta() {

	if(this.firstChild.getAttribute("src") == cartaPadrao && esperar == 0)

		if(is_segunda){
			var cartaSelecionada = cartas[this.id];
			this.firstChild.src = cartaSelecionada;
			this.firstChild.className = "carta-ok";
			segundaCarta = this;
			setTimeout(verificarPar, 500);
			is_segunda = false;
			esperar = 1;
		}
		else {
			var cartaSelecionada = cartas[this.id];
			this.firstChild.src = cartaSelecionada;
			this.firstChild.className = "carta-ok";
			primeiraCarta = this;
			is_segunda = true;
		}
}

function verificarPar() {
	if(primeiraCarta.firstChild.getAttribute("src") == segundaCarta.firstChild.getAttribute("src")){
		pares--;
		console.log("+1 PAR");
		if(doisJogadores)
			if(is_jogador2){
				console.log("Ponto p/ Jogador 2");
				ptsJogador2++;
				tentativasJ2++;
			}
			else{
				console.log("Pontos p/ Jogador 1");
				ptsJogador1++;
				tentativasJ1++;
			}
		else{
			console.log("Pontos p/ Jogador 1");
			ptsJogador1++;
			tentativasJ1++;
		}
			atualizarPlacar();

	}
	else {
		primeiraCarta.firstChild.setAttribute("src", cartaPadrao);
		segundaCarta.firstChild.setAttribute("src", cartaPadrao);
		segundaCarta.firstChild.className = "carta-check";
		segundaCarta.firstChild.className = "carta-check";
	
		if(doisJogadores)
			if(is_jogador2){
				is_jogador2 = false;
				destaqueJogador1();
				tentativasJ2++;
			}
			else{
				is_jogador2 = true;
				destaqueJogador2();
				tentativasJ1++;
			}
		else
			tentativasJ1++;
	}
	esperar = 0;
	if(pares == 0){
		mostrarResultado();
		estatisticas();
	}
}
