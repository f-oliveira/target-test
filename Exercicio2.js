function fibonacci(valorInserido) {
    resposta = 'O valor inserido pertence a sequencia.';

    if (valorInserido == 0 || valorInserido == 1) {
        return resposta;
    }

    let ultimo = 0;
    let penultimo = 1;
    let numero = 1;
    
    while (numero < valorInserido) {
        numero = penultimo + ultimo;
        ultimo = penultimo;
        penultimo = numero;
    }

    if (numero != valorInserido) {
        resposta = 'O valor inserido nao pertence a sequencia.'
    }
    
    return resposta;
}

let valorInserido = 0;
console.log(fibonacci(valorInserido));