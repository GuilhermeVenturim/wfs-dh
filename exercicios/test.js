/*function retornarDiagnosticoDoUsuario(alturaDoUsuario, pesoDoUsuario){
    let IMC = pesoDoUsuario / (alturaDoUsuario*alturaDoUsuario)

    if(IMC >= 18.5 && IMC <= 24.9){
        return `Seu diagnóstico é normal ${IMC.toFixed(1)}`
    }else if(IMC >= 25 && IMC <= 29.9){
        return `Seu diagnóstico é sobrepeso ${IMC.toFixed(1)}`
    }else if(IMC >= 30 && IMC < 40){
        return `Seu diagnóstico é obesidade ${IMC.toFixed(1)}`
    }else if(IMC > 40){
        return `Seu diagnóstico é obesidade grave ${IMC.toFixed(1)}`
    }else{
        return `Seu diagnóstico é abaixo do normal ${IMC.toFixed(1)}`
    }
}

console.log(retornarDiagnosticoDoUsuario(107, 188))


let pessoal = ['Guilherme']
console.log(pessoal)

//.push adiciona um elemento no final do array e utilizamos a variável para armazenar
let sobrenome = pessoal.push('Venturim')
console.log(sobrenome)

//.pop elimina o último elemento do array
let nome = pessoal.pop()
console.log(nome)

//.shift elimina o primeiro elemento do array
let soSobrenome = pessoal.shift()
console.log(soSobrenome)

//.join junta os elementos da array e os separa pelo elemento declarado entre parenteses
var separados = pessoal.join(' * ')
console.log(separados)

let pessoal = {
    nome: "Guilherme",
    sobrenome: "Venturim",
    nascimento: 1991
}*/
//let json = JSON.stringify(pessoal)
//let nJson = JSON.parse(pessoal)
//console.log(pessoal)


/*function dominio(URL){
    return 'http://' + URL
}
console.log(dominio("twitter.com"))

let desenho = '  Timão e Pumba  '
let trocaDesenho = desenho.replace('Timão', 'Leão') //troca elementos da string
console.log(desenho)                                
console.log(trocaDesenho) 
console.log(desenho.slice(0, 7))                   //retorna elemento da string após index inicial e final
console.log(desenho.trim())                        //retira os espaços no inicio e fim da string, não retira do meio
console.log(desenho.split(' '))                    //divide a string em várias strings
console.log(desenho.includes('Pumba'))


let listaSimples = ['Arroz', 'Feijão', 'Banana', 'Peito de Frango']

listaSimples.shift()                                //Elimina o primeiro item do Array.
console.log(listaSimples)

listaSimples.unshift('Macarrão', 'Manteiga')        //Adiciona itens no início do array.

console.log(listaSimples.indexOf('Macarrão'))       //Procura no array pelo elemento que recebe como parametro.

console.log(listaSimples.join(' | '))               //Junta os elementos do array e usa um caractere como parametro para separar os itens.

console.log(JSON.stringify(listaSimples))           //Converte valores JavaScript em uma string JSON.
*/

//If Ternário
let dia = 'Sabado';
let resultado = dia == 'Segunda-feirao'? 'Vou trabalhar!':'Vou estudar';
//console.log(resultado);

//Switch
switch(dia){
    case 'Segunda-feira':
        console.log('Vou tomar café e trabalhar!');
        break;
    case 'Sábado':
        console.log('Vou assistir, estudar e descansar.');
        break;
    default:
        console.log('Ihuuul!')
}

//Callbacks

function adicionaHttp(url) {
    return `http://${url};
}

function adicionaHttps(url) {
    return `https://${url}`;
}

function adicionaSmtp(url) {
    return `smtp://${url}`;
}

// Callback tem o proposito de reaproveitar código.

function retornarUrlsModificadas(Urls, operacaoCallback) {

    listaDeUrls = [];

    Urls.forEach(function (url) {
        listaDeUrls.push( operacaoCallback(url) );
    });

    return listaDeUrls;
}

console.log(retornarUrlsModificadas(['google.com', 'facebook.com', 'globo.com'], adicionaHttp));
console.log(retornarUrlsModificadas(['google.com', 'facebook.com', 'globo.com'], adicionaHttps));
console.log(retornarUrlsModificadas(['google.com', 'facebook.com', 'globo.com'], adicionaSmtp));

// 
console.log(retornarUrlsModificadas(['google.com', 'facebook.com', 'globo.com'], function(url) {
    return `http://$%7Burl%7D%60;
}));

console.log(retornarUrlsModificadas(['google.com', 'facebook.com', 'globo.com'], url => `http://$(url)`));


function papagaio(texto){
    for(let i = 1; i <= 5; i++){
    console.log(texto)
    }
}
papagaio('HaHaHa')


//Callback
function somar(numeroA, numeroB){
    return numeroA + numeroB
}
function subtrair(numeroA, numeroB){
    return numeroA - numeroB
}
function multiplicar(numeroA, numeroB){
    return numeroA * numeroB
}
function dividir(numeroA, numeroB){
    return numeroA / numeroB
}
function calculadora(numeroA, numeroB, callback){
    return callback(numeroA, numeroB)
}
console.log(calculadora(2, 5, dividir))

//CallBack II

function adicionarHttp(url) {
    return "http://" + url
}

function processar(array,adicionarHttp){
    let resultadoFunction = [];
    for(let i = 0; i < array.length; i++){
        resultadoFunction.push(adicionarHttp(array[i]))
    }
    return resultadoFunction
}
console.log(processar(["www.google.com","www.yahoo.com"], adicionarHttp))

