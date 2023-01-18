import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ product }) => {
    const { addToCart, getQuantityById } = useContext(CartContext)

    const onAdd = (quantity) => {
        addToCart(
            {
                ...product,
                quantity: quantity
            }
        )
        toast.success('Producto agregado al carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const quantity = getQuantityById(product.id)

    return (
        <div className="card">
            <div className="card-body">

                <p className="card-text">{product.description}</p>
                <h5 className="card-title">${product.price}</h5>

                <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
                <ToastContainer />
            </div>
        </div>
    )
}

export default ItemDetail