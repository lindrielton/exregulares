
// precisão para tratar de ceps ou numeros

const cep = /\d{5}-\d{3}/;

console.log(cep.test("111-22"));
console.log(cep.test("58818-000"));
console.log(cep.test("222-abc"));

console.log("telefone")

const numero = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(numero.test("(83)98158-3450"));
console.log(numero.test("(4)123-4567"));
console.log(numero.test("(20)abcd-abcd"));
console.log(numero.test("(84)98234-5678"));