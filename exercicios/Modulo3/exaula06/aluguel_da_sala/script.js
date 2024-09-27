function calculaAluguel() {

    const larguraSala = Number(prompt('Qual largura da sala? '));

    const comprimentoSala = Number(prompt('Qual o comprimento da sala? '))
    
    const valorAluguel = larguraSala * comprimentoSala * 2 +700;
    alert('O valor do aluguel será de R$ ' + valorAluguel)
}