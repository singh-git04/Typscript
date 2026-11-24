//Template hote hai genric code ko reusable bnata hai
//   genric define <T>, type    ,return value
function wrapInArray<T>(item: T): T[]{
    return [item]
}
// extendable 
wrapInArray("kit")
wrapInArray(43)
wrapInArray({flavour: "coffee"})

function pair<A,B>(a: A, b: B):[A, B]{
    return [a , b ];
}

pair("masala","ginger")
pair("masala",20)
pair("masala",{flvour: "coffee"})

// genric interface 

interface Box<T>{
    content: T
}

const numberBox: Box<number> = {content : 10}
const numberBoxCup: Box<string> = {content : "10"}

// partial, pick, omit, required too works in genric

// real world useCase genric == api-response forms statein react 

interface ApiResponse<T>{
    status: number, 
    data:  T
}

const res : ApiResponse<{flavour: string}>={
    status:300,
    data: {flavour : "masala"}
}