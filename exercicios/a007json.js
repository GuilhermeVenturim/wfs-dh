let dadosPessoa = {
    nome: 'Guilherme Venturim',
    idade: 31,
    altura: 1.80,
    numeroCelular: 99999999999,
    email: 'mail@mail.com'
};

//.stringfy() para transformar objeto literal JavaScript em json.
let json = JSON.stringify(dadosPessoa);
console.log(json);

//.parse() para transformar dados json em objeto literal JavaScript.
let newDados = JSON.parse(json);
console.log(newDados);