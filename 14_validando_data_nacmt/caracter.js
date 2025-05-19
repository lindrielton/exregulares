
const  data = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(data.test("25/04/1999"));
console.log(data.test("25/04"));
console.log(data.test("19/04/97"));
