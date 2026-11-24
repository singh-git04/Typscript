//Template hote hai interface

interface Chai {
    flavour: string,
    price: number,
    milk?: boolean
}

//uses
const masala:Chai = {
    flavour:"masala",
    price:30
}

interface Shop{
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: "Chaicode Caffe"}
// s.id = 2  cannot do this its readonly

// interface hai to functionality nahi likh sktey 
interface DiscountCalculator{
    (price:number): number
}

const apply50: DiscountCalculator = (p) => p* 0.5

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine : TeaMachine={
    start(){
        console.log("start")
    },
     stop(){
        console.log("start")
    }
}

//index signature

interface ChaiRatings{
    [flavour:string]: number
}

const ratings : ChaiRatings = {
    masala:4.5,
    ginger:4.5,
}

//interface feature
// merge hojatey hai
interface User{
    name: string
}

interface User{
    age: number
}

const u : User = {
    name : "Hitesh",
    age: 32
}

// interface extends 
interface A {a: string}
interface B {b: string}

interface C extends A, B{}