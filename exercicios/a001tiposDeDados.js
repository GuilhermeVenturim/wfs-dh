//Tipos de dados:

//Numéricos.
let anoNascimento = 1991;
console.log(`Nascido em ${anoNascimento}`);

//Cadeia de Caracteres - STRING.
let nomeESobrenome = 'Guilherme Venturim';
console.log(`Me chamo ${nomeESobrenome}`);

//Lógicos ou Booleanos.
let estudanteDeJavaScript = true;
console.log(`Atualmente estudo programação Web com JavaScript? ${estudanteDeJavaScript}`);

//Objeto literal.
let outrosDadosPessoais = { 
    solteiro: true, //booleano
    altura: 1.80, //numérico decinal
    email: 'guilhermeventurim@outlook.com'  //string
};
console.log(outrosDadosPessoais);

//Array.
let listaDeCompras = ['Café', 'Leite', 'Queijo', 'Manteiga', 'Suco de Uva'];
console.log(listaDeCompras[0]);

//Tipos especiais de Dados:

//NaN - Not A Number indica que o valor não pode ser passado como um número.
let naoNumerico = NaN;
console.log(naoNumerico);
let naoENumero = '1911' / 2;
console.log(naoENumero);

//Null = Valor nulo é atribuído para indicar um valor vazio ou desconhecido.
let nomeDaEsposa = null;
console.log(nomeDaEsposa);

//Undefined - Valor indefinido é usado quando vamos passar valor em outro momento.
let dataFinalCurso; //variável declarada sem valor.
console.log(dataFinalCurso);
dataFinalCurso = 'Novembro de 2022'; //atribuindo valor a váriavel.
console.log(dataFinalCurso);

