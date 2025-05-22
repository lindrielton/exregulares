
const validador = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validador.test("-a"));
console.log(validador.test("ab_-70"));
console.log(validador.test(""));
console.log(validador.test("elton-@23"))