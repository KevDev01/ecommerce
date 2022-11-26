import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = ()=>{
    return (
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/dri0nimpy/image/upload/v1669499191/Logo2_xkuwlq.png" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item"> <a href="#">Promocionales</a></li>
                <li className="navbar-item"> <a href="#">Imprenta</a></li>
                <li className="navbar-item"> <a href="#">Branding</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;