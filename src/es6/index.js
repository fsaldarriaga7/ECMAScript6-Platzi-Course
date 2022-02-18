function newFunction(name,age,country){
    var name = name || 'Felipe';
    var age = age || 31;
    var country = country || 'co';
    console.log(name,age,country);
}

//es6

function newFunction2(name = 'Felipe', age=31,country='co'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo',23,'co');

let hello = "Hello";
let world = "world";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Concatenar varios elementos
let epicPhrase2 = `${hello} ${world}`; //Comillas - Tildes francesas
console.log(epicPhrase2);

let lorem = "Aquí va un Lorem \n"
+ "Segunda línea del Lorem"

console.log(lorem)

//Multilíneas

let lorem2 = `Primer Lorem
Acá va el segundo Lorem
Incluso acá puede ir el tecero`;

console.log (lorem2);