//let and const

var myname= "vishwajeet";

myname="Tom";

console.log(myname);

//arrow function


function sayName() {
    console.log("vishwajeet");
    }
    
    sayName();

    function sayName(name) {
        console.log(name);
        }
        
        sayName("vishwajeet");


let sayName = (name) => {
            console.log("vishwajeet");
            }
            
            sayName();

let sayName = name => {
    return name;
                }
                
                console.log(sayName("vishwajeet"));

let double = num => num*2;

console.log(double(10));

