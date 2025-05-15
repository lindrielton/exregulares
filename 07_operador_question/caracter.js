
const numeros = /futebo?l/

console.log(numeros.test("futebol"));
console.log(numeros.test('futebl'));
console.log(numeros.test(''));
//a letra que pode ficar sem ser colocada é o


//exemplo 2

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123elton"));
console.log(padrao2.test("123"))

//eleestá esperando um alfa numerico sim ou não, por isso que da true nos resultados