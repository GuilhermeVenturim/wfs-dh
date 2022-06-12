let listaDeFilmes = ['Clube dos Cinco', 'A hora do pesadelo', 'Karatê Kid', 'Rocky IV', 'Conan, o Bárbaro', 'Highlander'];
//Apresentar todos os filmes separados por ponto e vírgula:
function separadosPorPontoEVirgula(){
    let listaFilmesSeparados = listaDeFilmes.join('; ');
    return listaFilmesSeparados;
};
console.log(separadosPorPontoEVirgula());

//Apresentar a quantidade de filmes na lista:
function qtdTotalFilmes(){
    let qtdFilmes = listaDeFilmes.length;
    return qtdFilmes;
};
console.log(qtdTotalFilmes());

//Buscar o nome do filme de acordo com seu index:
function buscarFilmePeloIndice(indiceDoFilme){
   let resultadoBuscaDeFilme = listaDeFilmes[indiceDoFilme];
   return resultadoBuscaDeFilme;
};
console.log(buscarFilmePeloIndice(0));

//Adicionar um novo filme a lista pelo seu nome:
function adicionarFilmeFinalArray(nomeDoFilme){
    listaDeFilmes.push(nomeDoFilme);
    return listaDeFilmes;
};
console.log(adicionarFilmeFinalArray('Senhor dos Anéis'));

//Atualizar um filme a partir de seu indice na lista?
function atualizarFilmePeloIndice(indexDoFilme, filmeAtualizado){
    listaDeFilmes[indexDoFilme] = filmeAtualizado;
    return listaDeFilmes;
}
console.log(atualizarFilmePeloIndice(0, 'Nárnia'));

//Listar todos os filmes com seu indice na lista:
function listarTodosFilmesPeloIndice(){
    let listaDeFilmesPeloIndice = [];

    listaDeFilmes.forEach(function(filme, indice){
        let filmeComIndice = `${indice} - ${filme}`;
        listaDeFilmesPeloIndice.push(filmeComIndice)
    })
        return listaDeFilmesPeloIndice;
}
console.log(listarTodosFilmesPeloIndice())

//Listar filme por quantidade:
function listarFilmePorQtd(qtdDeFilmesDesejado){
        let listaFilmePorQtd = [];
        for(let indice = 0; indice < qtdDeFilmesDesejado; indice++){

            let filme = listaDeFilmes[indice];

            listaFilmePorQtd.push(filme);
        }
        return listaFilmePorQtd;
}       
console.log(listarFilmePorQtd(3))


