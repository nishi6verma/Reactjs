//spread and rest operator (...)

let list = ["Audi", "Honda", "BMW"];

let newList = [...list, "ferrari"];

console.log(newList);

let person = {
    name: "vishwajeet",
    age: 28
}

let newPerson = {
    ...person,
    city: "delhi"
}

console.log(newPerson);

function hello(...all){
    console.log(all);
}

hello(1, 2, 3);