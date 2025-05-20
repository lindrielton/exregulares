const id =  /\d+ID\b/;

console.log(id.test("2404ID"));
console.log(id.test("000id"));
console.log(id.test("2345Id"))