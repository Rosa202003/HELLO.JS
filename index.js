const name="Rosada";

console.log('Hello my name is', name);
// console.log('hello', name);

let age=22;
age=23;
console.log('I am ', age, 'years old');

 // data types
 //string, number, boolean, null, undefined, object, array
 // array is a collection of data types
 const names=['Rosada', 'John', 'Doe'];
 console.log(names);

 // object is a collection of key value pairs
 const person={
     name:'Rosada',
     age:22,
     isMarried:false,
     hobbies:['coding', 'reading', 'swimming']
 }
 console.log(person);


 //functions
 function greet(name){
      return "hello " + name;
 }

 console.log(greet('Rosada'));