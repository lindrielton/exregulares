
const reg1 = new RegExp('bola');

console.log(reg1.test('existe bola'));//no proimeiro resultado a estring bola é encontrada
console.log(reg1.test(' não tem '));// no segundo resultadoa string bola não é encontrada

// outra forma


const reg2 = /bola/;
console.log(reg2.test('tem a palavra bola?'));
console.log(reg2.test('não tem a palavra bl?'));


//outra forma

let futebol = 'bola'
console.log(reg2.test(futebol));

// outra forma

console.log(/jesus/.test("jesus cristo de nasare"));
console.log(/jesus/.test("nossa senhora de aparecida"));

// testando 

let palavra = new RegExp("função");
console.log(palavra.test("existe a função"));

//maneira dois

let pl = /função/
console.log(pl.test("cade vc fazendo a função que madei"))

//maneira tres

let lista = "função"
console.log(pl.test(lista));