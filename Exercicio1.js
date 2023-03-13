// Exercício 1

function somar(indice, k) {
    let soma = 0;
    while (k < indice) {
        k += 1;
        soma += k;
    }
    console.log(`O resultado da soma é: ${soma}`);
}

let indice = 13;
let k = 0;

somar(indice, k);