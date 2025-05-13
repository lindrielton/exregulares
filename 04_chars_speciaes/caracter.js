const dia = /\d\d/;
console.log(dia.test("2025")&& dia.length == 2);
console.log(dia.test("abcd"));
console.log(dia.test("50"));

const palavrasminimotres = /\w\w\w/;
console.log(palavrasminimotres.test("elton") && palavrasminimotres.length == 3);
console.log(palavrasminimotres.test("uva"));
console.log(palavrasminimotres.test("eu"));

//temos que ter cuidaddo pois se a palavra atingir a nessecidade da regex ela vai passar 
// e por isso que temosque filtrar exatamente o que agente quer