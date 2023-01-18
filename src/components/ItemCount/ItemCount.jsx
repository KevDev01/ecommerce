import { useEffect } from "react";
import { useState } from "react"
import "./ItemCount.css";

const ItemCount = ({ stock =5, initial=1, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  useEffect(()=>{
    setCounter(initial)
  },[initial])

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <p className="counter">Cantidad: {counter}</p>
      <button onClick={decrement} className="btn btn-secondary">-</button>
      <button onClick={increment} className="btn btn-secondary">+</button>
      <button onClick={() => onAdd(counter)} className="btn btn-primary">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount