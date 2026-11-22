// Type narrowing
function getChai(kind:string | number){
    if(kind === "string"){
        return `Making ${kind} of chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving  default masala chai`
}

// Exhaustive Check

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small")  {
        return `small cup`
    }

    if(size === "medium" || size === "large") {
        return `make extra cup`
    }

    return `chai order #${size}`
}

// instance to check types in js like (typeOf, instanceOf) is known as guardrills

class KhuldChai{
    serve(){
        return `Serving Khulhad Chai`
    }
}

class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai: KhuldChai | Cutting){
    if(chai instanceof KhuldChai){
        return chai.serve()
    }
}

//  typeGuard
type ChaiOrder =  {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any):obj is ChaiOrder{
    return (
        typeof  obj === "object" && 
        obj  !== null && 
        typeof obj.type === "string" && 
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}


// Use case
type  MasalaChai = {type: "masala"; spicelevel: number}
type  GingerChai = {type: "ginger"; amount: number}
type  ElaichiChai = {type: "elaichi"; aroma: number}

type Chai = MasalaChai  | GingerChai | ElaichiChai

function MakeChai(order : Chai){
    switch (order.type) {
        case "masala":
            return 'masala chai'
            break;
        case "elaichi":
            return 'elaichi chai'
            break;
        case "ginger":
            return 'ginger chai'
            break;
    }
}

// To check Property
function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{
    //
}