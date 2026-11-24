const chai =  { 
    name: "Masala chai",
    price: 20,
    isHot: true
}


// typescript ke andr value infer hoti hai
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }


// decalring object types

let tea : {
    name: string; 
    price: number;
    isHot: boolean; 
}

tea = {
    name: "gingerTea",
    price: 20,
    isHot: true
}

type Tea = {
    name: string;
    price: number; 
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "AdrakChai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

type Cup = {size: string}; 
let smallCup : Cup = {size: "200ml"}

let  bigCup = {size: "500ml", material : "steel"}
smallCup = bigCup

// Ts ke andr type compatibility ke issues hotey hai
// structure vs /  duck typing

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee 

type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "chaicode",
    password: "123"
}

// code clearity

type Item = {name : string, quantity: number}
type Address = {street: string, pin : number}

type Order = {
    id: string; 
    items: Item[]; 
    address: Address;
}

// data type define krtey ho ak tarikey se use krtey ho kai tarikey se

type Chai = {
    name : string; 
    price: number;
    isHot: boolean;
}

// Partial Update
const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: true})
updateChai({})  // data type optional ye sbko hi optional bna deta hai kynki issey empty rkha hai


// Required
type ChaiOrder = {
    name?: string;
    quantity: number;
}

const placeOrder = (order: Required<ChaiOrder>) =>{
    console.log(order)
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})
 
// pick properties
type brew = {
    name: string;
    price: number;
    isHot: boolean;
    ingredient :string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "lemon Tea",
    price: 20
}


type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    SecretIngredient :string[]
}

type PublicChai = Omit<Chai,"SecretIngredient">