

const reg = /\w+: (matheus|joão|lucas)/;

console.log(reg.test("Nome: matheus"));
console.log(reg.test("nome: marcos"));
console.log(reg.test("nome: lucas"));