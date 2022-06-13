import {somar} from './modulos/somar.js';
import {dividir} from './modulos/dividir.js';
import {subtrair} from './modulos/subtrair.js';
import {multiplicar} from './modulos/multiplicar.js';

let somando = somar(2, 7);
let dividindo = dividir(10, 2);
let dividindoPorZero = dividir(5, 0);
let subtraindo = subtrair(10, 5);
let multiplicando = multiplicar(5, 2);
let multiplicandoPorZero = multiplicar(5, 0);

console.log(somando)
console.log(dividindo)
console.log(dividindoPorZero)
console.log(subtraindo)
console.log(multiplicando)
console.log(multiplicandoPorZero)







/*
import {somar} from './modulos/somar';
let somando = new somar

console.log(somando(2, 5))


let somar = import('./modulos/somar');
let dividir = import('./modulos/dividir');
let subtrair = import('./modulos/subtrair');
let multiplicar = import('./modulos/multiplicar');


console.log(somar);
*/