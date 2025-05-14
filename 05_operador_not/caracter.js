
const letras = /[^abc]/

console.log(letras.test("adedonha"));
console.log(letras.test('abc'));

// ex2


const palavras = /[^a-z]/;
console.log(palavras.test("paralelepipedo"));
console.log(palavras.test("ecandinavia"));
console.log(palavras.test("123testando"));
console.log(palavras.test("!$%"));
//elenão aceita nenhum caractere que seja letra porem numeros ele aceita