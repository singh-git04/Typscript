type ChaiOrder = {
    type : string;
    sugar: number; 
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder){
    console.log(order)
} 

//Is type k ak bhai bhi hai or vo fail kha hota hai

type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe{
//     water = 100; 
//     milk = 50; 
// }

// yha pr error dega ye kyunki ye kheta hai basic krney dunga customize type pr nahi krney dunga yha bnna pdtey hai interface
// type hta kr interface use krlo variable declare krna hota hai
interface CupSize {
    size : "small" | "large"
}


class Chai implements CupSize{
    size: "small" | "large" = "small"
}

// type ke sth this doesn't work interface bna do

// type Response  = {ok: true} | {ok : false}
// class myRes implements Response{
//     ok: boolean = true; 
// }



// literal types
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t:TeaType){
    console.log(t)
}


type BaseChai = {tealeaves: number}
type Extra = {masala:number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    tealeaves: 2,
    masala : 1
}

type User = {
    username: string; 
    bio? : string
}

const u1 : User = {username : "Hitesh"}
const u2 : User = {username : "Hitesh", bio: "hitesh.ai"}

type Config = {
    readonly appName: String
    version : number
}
const cfg:  Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "ChaiiCode"    // its readonly