const extenso = require('extenso');

// 3.a - 1,3,5,7
function exerciseA (a) {
    const lastNum = a[a.length - 1];
    return lastNum + 2;
}

// 3.b - 2,4,8,16,32,64
function exerciseB (b) {
    const lastNum = b[b.length - 1];
    return lastNum * 2;
}

// 3.c - 0,1,4,9,16,25,36
function exerciseC (c) {
    const lastNum = c[c.length - 1];
    const baseNum = Math.pow(lastNum, 0.5);
    return Math.pow(baseNum + 1, 2);
}

// 3.d - 4,16,36,64
function exerciseD (d) {
    const lastNum = d[d.length - 1];
    const baseNum = Math.pow(lastNum, 0.5);
    return Math.pow(baseNum + 2, 2);
}

// 3.e - 1,1,2,3,5,8
function exerciseE (e) {
    const lastNum = e[e.length - 1];
    const penultimateNum = e[e.length - 2];
    return penultimateNum + lastNum;
}

// 3.f - 2,10,12,16,17,18,19
function exerciseF (f) {
    let lastNum = f[f.length - 1];
    let firstLetter = extenso(lastNum.toString()).split('')[0];
    let nextNum;

    do {
        lastNum++;
        nextNum = extenso(lastNum.toString()).split('')[0];
    } while (nextNum != firstLetter);
   
    return lastNum;
}

console.table({
    'Exercicio A': exerciseA([1, 3, 5, 7]),
    'Exercicio B': exerciseB([2, 4, 8, 16, 32, 64]),
    'Exercicio C': exerciseC([0, 1, 4, 9, 16, 25, 36]),
    'Exercicio D': exerciseD([4, 16, 36, 64]),
    'Exercicio E': exerciseE([1, 1, 2, 3, 5, 8]),
    'Exercicio F': exerciseF([2,10,12,16,17,18,19])
});