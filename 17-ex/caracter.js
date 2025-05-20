const nomeMarca = /\w+Marca:\(|Nike|Adidas|Puma|Asics\)/;

console.log(nomeMarca.test("marca:Nike"));
console.log(nomeMarca.test("marca:Puma"));
console.log(nomeMarca.test("marca:acostamento"));
console.log(nomeMarca.test("marca: "))