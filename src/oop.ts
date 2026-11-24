class Chai {
    flavour: string;
    price: number;


    constructor(flavour: string, price:number){
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("Ginger",20)
masalaChai.flavour = "masala"

//Access Modifier

class Chaii{
    public flavour : string  = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return  this.secretIngredients // ok
    }
}

class Shop {
    protected ShopName = "Chai Corner"
}

class Branch extends Shop{
    getName(){
        return this.ShopName //ok
    }
}

const c = new Chaii()


// private # Ese bhi declare krtey hai
class Wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet()


// ReadOnly properties

class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

// Control Gets means get&Setter 
//jb private values ko direct access nahi kiya ja skta tb getters or setter k use krtey hai

class ModernChai{
    private _sugar = 2
//getter
    get sugar(){
        return this._sugar
    }
//setter
    set sugar(value:number){
        if(value>5) throw new Error ("Too Sweet")
            this._sugar = value
    }
}

// how to use getter Setter
const d  = new ModernChai()
d.sugar = 3

// Static members
class EkChai{
    static shopName = "Code center"

    constructor(public flavour: string){}
}
console.log(EkChai.shopName)

// Abstract class

abstract class Drink{
    abstract make(): void 
}

class MyChai extends Drink{
    make() {
        console.log("Brewing")
    }
}

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}

    make(){
        this.heater.heat
    }
}

