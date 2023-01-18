import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className="container-cart">
                
                <Link to="/cart"> 
                <AiOutlineShoppingCart 
                style={{
                  color: "white"
                }}
                />
                
                <div className="bubble">
                  <span>{cart.length}</span>
                </div>
                </Link>
            </div>
  )
}
