
function retornarDiagnosticoDoUsuario(alturaDoUsuario, pesoDoUsuario) {
    let imc = pesoDoUsuario / (alturaDoUsuario * 2)

    if(imc >= 18.5 && imc <= 24.9){
        return diagnostico = `Normal, IMC ${imc.toFixed(2)}`
    }else if(imc >= 25 && imc <= 29.9){
        return diagnostico = `Sobrepeso, IMC ${imc.toFixed(2)}`
    }else if(imc >= 30 && imc <= 40){
        return diagnostico = `Obesidade, IMC ${imc.toFixed(2)}`
    }else if (imc > 40)
        return diagnostico = `Obesidade grave, IMC ${imc.toFixed(2)}`
    else{
        return diagnostico = `Abaixo do peso, IMC ${imc.toFixed(2)}`
    
    }//return diagnostico
}
// Utilize a mensagem a seguir como base do retorno esperado:
// Seu diagnóstico é XXXXXX.
console.log(retornarDiagnosticoDoUsuario(1.88, 105))
console.log("Seu diagnóstico é", retornarDiagnosticoDoUsuario(1.88, 107) );
console.log("Seu diagnóstico é", retornarDiagnosticoDoUsuario(1.58, 55) );