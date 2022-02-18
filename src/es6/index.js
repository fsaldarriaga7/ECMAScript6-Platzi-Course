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

let person = {
    'name': 'Felipe',
    'age': 31,
    'country': 'co'
}

console.log(person.name, person.age);

let {name,age,country} = person;

console.log(name,age,country); //Es la misma asignación que person.name y person.age

//Promises

const helloPromise = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Hey!');
        }
        else{
            reject('Ups!');
        };
    });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

