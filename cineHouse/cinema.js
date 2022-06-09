let cinema = 'CineHouse'

let catalogo =  [   {
        codigo: 01,
        nome: 'O senhor dos anéis: A sociedade do anel',
        duracao: 3,
        atores: 'Elijah Wood, Sean Astin, Ian McKellen',
        lancamento: 2002,
        emCartaz: false
        
    },
    {
        codigo : 02,
        nome: 'O senhor dos anéis: As duas torres',
        duracao: 3,
        atores: 'Elijah Wood, Sean Astin, Viggo Mortensen',
        lancamento: 2002,
        emCartaz : false
    },
    {
        codigo: 03,
        nome: 'O senhor dos anéis: O retorno do rei',
        duracao: 3.2,
        atores: 'Elijah Wood, Sean Astin, Viggo Mortensen',
        lancamento: 2003,
        emCartaz: false
    },
 /*   {
        codigo: 04,
        nome: 'Doutor Estranho no Multiverso da Loucura',
        duracao: 2,
        atores: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
        lancamento: 2022,
        emCartaz: true
    }*/
]
function AdicionarFilme(codigo, nome, duracao, atores, lancamento, emCartaz){
        this.codigo     = codigo
        this.nome       = nome
        this.duracao    = duracao
        this.atores     = atores
        this.lancamento = lancamento
        this.emCartaz   = emCartaz
}

let newFilme = new AdicionarFilme(04, 'Doutor Estranho no Multiverso da Loucura', 2, 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor', 2022, true)


function buscarFilme(index){
        
        return index
}
function alterarStatusEmCartaz(){
        
}

//console.log(catalogo)

//console.log(catalogo, newFilme)
console.log(buscarFilme(2))
console.log()