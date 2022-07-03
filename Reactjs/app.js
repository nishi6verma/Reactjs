// Reference (array, object) and primitive type (string, number)

let num1 =100;

let num2 = num1;

num2 = 50;

console.log(num1);
console.log(num2);

let person = {
    name: "vishajeet"
}

let person2 = {
    ...person
}

person2.name = "ajit";

console.log(person);
console.log(person2);