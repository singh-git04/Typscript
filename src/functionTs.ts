function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("masala",2)

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null
    return order
}


function logChai():void{
    console.log(`Chai is ready`)
}

// Optional Parameter && default Parameter
    // Industry mai optional use hota hai or inhey last mai use krna 
// function orderChai(type?:string){

// }

function orderChai(type:string = "masala"){

}


function createChai(order:{
    type:string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 4
}