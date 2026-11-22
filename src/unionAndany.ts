let subs  : number  | string = '1M'


let apiRequestStatus : "pending" | "success"| "failure" = "pending"

// apiRequestStatus = "done"  //#wrong or not allowed


let airLineSeat : "aisle" | "window" | "middle"

airLineSeat = "aisle"

const orders = ["12", "20", "28", "42"]

let currentorder : string | undefined

for(let order of orders){
    if(order==="28"){
        currentorder = order
    }else currentorder = "11"
}

console.log(currentorder)