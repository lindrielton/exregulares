const pontoRegex = /./;
console.log('.')
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("11abs"));

const dRegex = /\d/;
console.log('d')
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("11abs"));

const dRegex2 = /\D/;
console.log('D')
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("11abs"));

const dRegex3= /\s/
console.log('s');
console.log(dRegex3.test("asd"));
console.log(dRegex3.test(" "));
console.log(dRegex3.test("123"));
console.log(dRegex3.test("11abs"));

const dRegex4 = /\w/;
console.log('w');
console.log(dRegex4.test("asd"));
console.log(dRegex4.test(" "));
console.log(dRegex4.test("123"));
console.log(dRegex4.test("11abs"));