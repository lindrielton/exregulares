
const ip =  /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;

console.log(ip.test("134.1.2.3"));
console.log(ip.test("123.0.0.1"));
console.log(ip.test("12.23.4"));
console.log(ip.test("192.1.2.3"));