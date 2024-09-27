function calculadoraBurocratica() {
    const primeiroNumero = Number(prompt('Insira o primeiro número:'));

    const funcao = prompt('Qual operação você deseja? (+, -, *)');

    const segundoNumero = Number(prompt('Insira o segundo número:'))

    let resultado; 
    if(funcao === '+') {
        resultado = primeiroNumero + segundoNumero;
    } if (funcao === '-') {
        resultado = primeiroNumero - segundoNumero;
    } if (funcao === '*') {
        resultado = primeiroNumero * segundoNumero;
    }
    alert('O resultado é ' + resultado)

    
   
}