//Atualização no código em andamento.
//Reestrutução das funções em andamento.


//Import do módulo database com o catalogo de filmes.
import catalogo from './database/catalogo.json' assert { type: 'json' };
console.log(catalogo)

//1. listarTodosOsFilmes - criar
//A função deve percorrer toda a lista de filmes armazenada no catálogo
//utilizando o loop for e retornar as informações de maneira amigável ao usuário.



//2. listarFilmesEmCartaz - criar
//A função deve percorrer toda a lista de filmes armazenada no catálogo
//utilizando o loop for e retornar os filmes disponíveis em cartaz - as informações
//de maneira amigável ao usuário.



//3. alterarStatusEmCartaz - alterar
//A função deve receber como parâmetro o número identificador do filme
//escolhido, buscar o filme com base no parâmetro recebido e alterar o status
//existente da propriedade emCartaz (se estava como true, alterar para false, e vice e versa).
//O escopo é igual ao da aula passada, porém o desafio é ao invés de usarmos a
//estrutura condicional if que estamos habituados, mudar para if ternário.








//CÓDIGO ANTERIOR

/*
//let cinema = 'CineHouse'


//Adicionar filme ao catalogo.
function AdicionarFilme(codigo, nome, duracao, atores, lancamento, emCartaz){
        this.codigo     = codigo
        this.nome       = nome
        this.duracao    = duracao
        this.atores     = atores
        this.lancamento = lancamento
        this.emCartaz   = emCartaz
}

let newFilme = new AdicionarFilme(4, 'Doutor Estranho no Multiverso da Loucura', 2, 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor', 2022, true)

//Buscar filme
function buscarFilme(index){
        let resultado = catalogoJavaScript[index]
        return resultado
}
console.log(buscarFilme(2))


//Alterar status do filme
function alterarStatusEmCartaz(index){
        //let statusEmCartazAlterado = []
        if(catalogo[index].emCartaz == false){
            return `O Filme ${catalogo[index].nome} está em cartaz?  ${catalogo[index].emCartaz = true}`
        }else{
            return `O Filme ${catalogo[index].nome} está em cartaz?  ${catalogo[index].emCartaz = false}`
        }
        //catalogo[index].emCartaz != true
}

//console.log(catalogo.codigo[2])
//console.log(newFilme)
//console.log(catalogo, newFilme)
//console.log(alterarStatusEmCartaz(3))
*/