/*
import {somar} from './somar';
let somando = new somar
console.log(somando(2, 5))
*/



let somar = import('./modulos/somar');
let dividir = import('./modulos/dividir');
let subtrair = import('./modulos/subtrair');
let multiplicar = import('./modulos/multiplicar');

let somando = somar;

console.log(somando[2, 5]);


/*Agora que chegamos até aqui, que tal ser mais desafiador ainda?
1. Criar um arquivo calculadora.js, em que devemos importar os quatro arquivos feitos
anteriormente.

2. Executar a função que permite somar e a função que permite subtrair, passando como
argumentos dois números quaisquer. Mostrar no console os resultados.
3. Executar a função que permite multiplicar, passando como argumentos dois números
quaisquer. Mostrar no console o resultado.
4. Executar a função que permite multiplicar, passando agora como um dos dois
argumentos, o número zero. Mostrar no console o resultado.
5. Executar a função que permite dividir, passando como argumentos dois números
quaisquer. Mostrar no console o resultado.
6. Executar a função que permite dividir, passando agora como um dos dois argumentos,
o número zero. Mostrar no console o resultado.

Parabéns por todo trabalho feito até aqui!
Para refletirmos um pouco...
a. O que teria acontecido se, ao invés de gerar um arquivo por cada operação
matemática, tivéssemos programado tudo em um único arquivo?
b. Por que o melhor caminho é criar diferentes arquivos e então importá-los em um só?
c. Será que esta metodologia de trabalho será uma constante daqui em diante?

Até a próxima!
*/