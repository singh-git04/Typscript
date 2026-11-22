//where see type assertion fails where || // forceFull type assertion/Anotation

let response : any = '42'
let numericLength: number = (response as string).length


type Book = {
    name: string
}

let bookString = '{"name": "One thing"}'

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)


const inputElements = document.getElementById("username") as HTMLInputElement


let value : any

value = 'chai'
value = [1, 2, 3]       //assing krra hai 
value = 2.5
value.toUpperCase()


let newValue : unknown

newValue = 'chai'
newValue = [1, 2, 3]
newValue = 2.5
//use typeGuard here 
if(newValue === "string"){
     newValue.toUpperCase()
}

// try catch Case

try {
    
} catch (error) {
    //typeGuard
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}

const data : unknown = "String"
const strData = data as string  // forceFully bolna pdta hai maan lo data type


type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role:Role): void {
    if(role === "admin"){
        console.log("Redirect to admin Dashboard")
        return
    }
     if(role === "user"){
        console.log("Redirect to user Dashboard")
        return
    }
    role //if it has nothing then type is never 
}

function neverReturn (): never{
    while(true){}
}


