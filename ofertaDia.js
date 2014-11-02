//$("<div>", {class	:"oferta_dia"}).appendTo("#pt_custommenu");

var div = $("<div>").addClass("oferta_dia");
var titulo = $("<p>").addClass("titulo_oferta_dia").text("Oferta do Dia");
var link = $("<a>").attr("href", "#");
var oferta = $("<div>").addClass("oferta");

$(div).append(titulo).append(link).append(oferta).appendTo("#pt_custommenu");

/*var clientes = $(".oferta_dia");
	var url = "http://viaverde.com.br/oferta.json";


	$.getJSON(url, function(retorno){
		var ul = $("<ul>");


		$.each(retorno.clientes, function(){

			var li = $("<li>");
			var cNome = $("<h3>").text(this.nome);
			var cLogo = $("<img>").attr("src", this.logo);
			var cServicos = $("<span class='servicos'>Serviços: ").text(this.servicos);
			var cDescricao = $("<span>").text(this.descricao);

			li.append(cNome).append(cLogo).append(cServicos).append(cDescricao).appendTo(ul);
		});

		$("ul", clientes).remove();
		ul.appendTo(clientes);
	});
*/