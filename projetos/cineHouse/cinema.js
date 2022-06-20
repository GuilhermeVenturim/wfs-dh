//Atualização no código em andamento.
//Reestrutução das funções em andamento.



import catalogo from './database/catalogo.json' assert {type: "json"};
let catalogoJavaScript = catalogo
console.log(catalogoJavaScript)

//let cinema = 'CineHouse'

function AdicionarFilme(codigo, nome, duracao, atores, lancamento, emCartaz){
        this.codigo     = codigo
        this.nome       = nome
        this.duracao    = duracao
        this.atores     = atores
        this.lancamento = lancamento
        this.emCartaz   = emCartaz
}

let newFilme = new AdicionarFilme(4, 'Doutor Estranho no Multiverso da Loucura', 2, 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor', 2022, true)


function buscarFilme(index){
        let resultado = catalogo[index]
        return resultado
}

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
//console.log(buscarFilme(2))
//console.log(alterarStatusEmCartaz(3))