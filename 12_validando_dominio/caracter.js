

const dominio = /[?www.]\w+\.com|.com.br/;

console.log(dominio.test("www.cursoemvideo.com"));
console.log(dominio.test("www.onebiecode.com"));
console.log(dominio.test("udemy.com.br"));
console.log(dominio.test("www.blablabla.com"));