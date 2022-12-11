import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css"
import {Link} from "react-router-dom"

export const CartWidget = () => {
  return (
    <div className="container-cart">
                
                <Link to="/cart"> 
                <AiOutlineShoppingCart 
                style={{
                  color: "white"
                }}
                />
                
                </Link>
            </div>
  )
}
