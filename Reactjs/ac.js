//Class and object

class customer{
    constructor(n){
      this.name = n;
    }

    age =25;

    buy = () => {
        console.log("hello...");
    }
}

class GuestCustomer extends customer{
    hello(){
    console.log("hello");
    }
}

let customer1 = new GuestCustomer("vishwajeet");

console.log(customer1);

customer1.buy();