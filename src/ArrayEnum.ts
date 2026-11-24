const chaiFlavours: string[] = ["Masala", "Adark"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]


// Array of Objects
type Chai = {
    name: string;
    price: number
} 

const menu: Chai[] = [
    {name:"masala", price: 15},
    {name:"Kadak", price: 25},
]

// ReadOnly Array

const cities: readonly string[] = ["Delhi", "Jaipur"]

// cities.push("pune")   // it won't work

// multidimensional array
// two dimensional array\

const table : number[] [] = [
    [1, 2, 3],
    [4, 5, 6]
]


// tuple

let chaiTuple : [string, number]

chaiTuple = ["Masala",20]
// chaiTuple = [20, "Masala"]  //take care of format

let userInfo: [string, number, boolean?]
userInfo = ["hitesh",100]
userInfo = ["hitesh", 100, true]

// ReadOnly tuple
const location : readonly [number, number] = [28.66, 32.22]


// named Tuple
const items: [name: string, price: number] = ["thing", 25]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE

// Enum ke andr auto increment values bhi hoti hai (don't prefer depends on you)
enum Status {
    PENDING = 100,
    SERVED, //101      (autoincrement)
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type:ChaiType){
    console.log(`Making: ${type}`)
}

makeChai(ChaiType.GINGER)
// makeChai("masala") 


// not Standard Practice
enum RandomEnum {
    ID = 1,
    NAME = "code"
}

const enum Sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH

let t : [string , number] = ["chai", 10]
t.push("extra")