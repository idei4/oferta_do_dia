//$("<div>", {class	:"oferta_dia"}).appendTo("#pt_custommenu");

var div = $("<div>").addClass("oferta_dia");
var tituloBox = $("<p>").addClass("titulo_oferta_dia").text("Oferta do Dia");
var link = $("<a>").attr("href", "#");
var ofertaBox = $("<div>").addClass("oferta");

$(div).append(tituloBox).append(link).append(ofertaBox).appendTo("#pt_custommenu");

var ofertas = $(".oferta_dia");
var url = "http://viaverdeonline.com.br/oferta.json";


$.getJSON(url, function(resultado){


	$.each(resultado.ofertaDia, function(){
		var otitulo = $("<p class='titulo'>").text(this.titulo);
		var oImagem = $("<img>").attr("src", this.imagem);
		var oLink = $("<a>").attr("href", this.link).addClass("link-oferta").text("Adicionar ao carrinho");
		/*var cDescricao = $("<span>").text(this.descricao);*/

		$(otitulo.appendTo(ofertaBox));
		$(oImagem.appendTo(ofertaBox));
		$(oLink.appendTo(ofertaBox));
	});

	//$("div", ofertas).remove();
	//divOferta.appendTo(ofertas);
});