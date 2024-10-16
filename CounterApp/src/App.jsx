
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function addition() {
    return setCount(count => count + 1)
  }

  function subtract() {
    return setCount(count => count - 1)
  }

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  let cards = products.map(product =>
    <li className='cardProduct' key={product.id} style={{ color: product.isFruit ? "orange" : "yellow" }}>{product.title}</li>

  )

  console.log(cards)




  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={subtract}>- Subtract</button>
      <button onClick={addition}>+ Add</button>
      <ul>{cards}</ul>
    </div >
  )
}

export default App
