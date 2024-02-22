import { useState } from 'react'

const ItemCount = () => {
    const { count, setCount } = useState(0)
    const increment = () => {
        setCount(count => count + 1)
    }
    const decrement = () => {
        setCount(count => count- 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Agregar al carrito</button>
            <button onClick={increment}>Quitar del carrito</button>
        </div>

    )
}
export default ItemCount 