import { Children } from 'react'
import './App.css'
import  {Card}  from './component/Card.tsx'
import { Counter } from './component/Counter.tsx'
import List from './component/List.tsx'
import OrderForm from './component/OrderForm.tsx'
import type {Chai} from "./types.ts"


const menu: Chai[]=[

  {id: 1, name: "Masala", price:25},
  {id: 2, name: "Ginger", price:35},
  {id: 3, name: "Lemon", price:50},
]

function App() {

  return (
    <>
    <Card name="HeadPhones" price={5000}/>
    <Counter/>
    <List items={menu}/>
    <OrderForm
      onSubmit={(order)=>{
        console.log("Placed", order.name, order.cups);
      }}
    />
    <div>
      <Children 
      title="TypeScript"
    footer = {<button>Order Now</button>}
      />
    </div>
    </>
  )
}

export default App
