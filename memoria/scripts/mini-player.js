// FUN��O PARA GIRAR LOGOTIPO AO ABRIR A P�GINA
function vira(){
	var b = document.getElementById("logo");
	b.id = "parada";
	setTimeout(function(){b.id="logo";},4000);
}

// INSERE DENTRO DA TAG 'MUSICA' OS ELEMENTOS PARA CRIAR UM PLAYER
function tocarMusica() {
	var divMusica = document.getElementById("musica");
	divMusica.innerHTML = "<audio id=\"player\" autoplay=\"autoplay\" loop= controls=\"controls\"><source id=\"track\" src=\"linkinpark_in_the_end_instrumental.ogg\" type=\"audio/ogg\"></audio>";
	tocando = true;
	
}

// EXCLUIR A TAG M�SICA, PARANDO, ASSIM, A REPRODU��O DO �UDIO
function pararMusica() {
	if(tocando){
		var divMusica = document.getElementById("musica");
		var player = document.getElementById("player");
		divMusica.removeChild(player);
		tocando = false;
	}
}

// ATRIBUI AS FUN��ES AOS BOT�ES DE PLAY, STOP E DEFINE O SETTIMOUT DA ROTA��O DA LOGOMARCA
function miniPlayer(){	
		
	var btn_stop = document.getElementById("stop-musica");
	btn_stop.addEventListener("click", pararMusica, false);
	var btn_playMusica = document.getElementById("play-musica");
	btn_playMusica.addEventListener("click", tocarMusica, false);
	setTimeout(vira, 2000);
}

window.addEventListener("load", miniPlayer, false);

var tocando = true;
