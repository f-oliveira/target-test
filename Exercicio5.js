function reverse(strInput) {
    let stack = [];

    for (let i = 0; i < strInput.length; i++) {
        stack.push(strInput[i])
    }

    let reverseString = '';

    while (stack.length > 0) {
        reverseString += stack.pop();
    }
    return reverseString;
}

console.log(reverse('Teste de logica Target Sistemas'));