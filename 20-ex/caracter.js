// faça regex que aceite datas de aniversario / email / numero de telefone


const email = /\w+@\w+\.\w+/;
console.log(email.test('lindrielton@gmail.com'));
console.log(email.test('elton@gmail'));


const num = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(num.test('(83)98158-3450'));
console.log(num.test('(040)98120-20203'));


const date = /[0-9]{2}[/][0-9]{2}[/][0-9]{2,4}/;

console.log(date.test('25/04/99'));
console.log(date.test('09/12/1934'));


const senha = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(senha.test('elton@_123'))

