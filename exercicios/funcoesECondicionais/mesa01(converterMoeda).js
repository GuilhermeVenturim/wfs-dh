// Cotação do dólar no dia 3 de maio de 2022.
let cotacaoDoDolarHoje = 4.97;
let valorMinimoDeCompraDeDolar = 100;
let valorMaximoDeCompraDeDolar = 2500;
let valorParaConverter = 10000

function converterRealParaDolar(valorEmReal) {
    let valorDolar = valorEmReal / cotacaoDoDolarHoje
    return valorDolar
}


if (converterRealParaDolar(valorParaConverter) < valorMinimoDeCompraDeDolar){
    console.log('A compra mínima permitida é de $ ' + valorMinimoDeCompraDeDolar)
}
// Utilize as mensagens a seguir como base do retorno esperado:
// A compra mínima permitida é de $ XXX,XX.
// A compra máxima permitida é de $ XXXX,XX.
// Você pode comprar $ XXX,XX.
