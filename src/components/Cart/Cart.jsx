
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import FormikFormulario from '../Formik/FormikFormulario'
import "./Cart.css"

const Cart = () => {
  const { cart, clearCart, getSubtotal, getTotalPrice, deleteProductById } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true)
    }
  }

  if (orderId) {
    return <div>
      <h1>Gracias por tu compra</h1>
      <p>Tu número de orden es: {orderId} </p>
      <Link to={"/"}>Volver al inicio</Link>
    </div>
  }

  if (cart.length < 1) {
    return (
      <div className='noProd'>
    <p>El carrito está vacío</p>
    <Link to={"/"}>Volver a los productos</Link>
    </div>)
  }

  return (
    <div>
      {
        cart.map(item => (
          <div key={item.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <h5 className="card-text">Cantidad: {item.quantity}</h5>
              <button className='btn btn-danger' onClick={() => deleteProductById(item.id)}>Quitar</button>
            
            </div>

          </div>
        ))
      }
      <div>
        <div className='totales'>
        <p>Subtotal: ${getSubtotal().toFixed(2)} </p>
        <p>Total con IVA: ${getTotalPrice().toFixed(2)} </p>
        </div>
        {
          buy ? (
            <FormikFormulario
              cart={cart}
              getTotalPrice={getTotalPrice}
              setOrderId={setOrderId}
              clearCart={clearCart}
            />
          ) : (
            <div className='totales'>
              <button type='button' className='btn btn-primary' onClick={openForm}>Comprar</button>
              <button type="button" className='btn btn-secondary' onClick={() => clearCart()}>Limpiar</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart