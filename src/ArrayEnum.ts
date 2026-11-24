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

