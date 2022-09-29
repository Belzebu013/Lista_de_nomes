let nomes = [
	"eduardo",
	"isis",
	"lorenzo",
	"daniel",
	"leonardo",
	"antônio",
	"beatriz",
	"ana",
	"isa",
	"gustavo",
	"abel", 
	"eduardo"

]

function pesquisarNome(){
	let nomePesquisa = document.getElementById('campoNome').value
	//alert(nomePesquisa)
	let itensLista = ""
	for(indice in nomes){
		let nome = nomes[indice]
		if(nomePesquisa == nome){
			itensLista += `
			<li class="list-group-item">
			${nome}
			</li>`
		}
	}
	document.getElementById('lista').innerHTML = itensLista
}


function carregarNomes(){
	let itensLista = ''
	for(indice in nomes){
		let nome = nomes[indice]
		itensLista += `
			<li class="list-group-item">
			${nome}
			</li>`
		
		//alert(itensLista)
	}
	document.getElementById('lista').innerHTML = itensLista
}