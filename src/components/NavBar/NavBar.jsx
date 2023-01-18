import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="container-logo">
                <Link to="/">
                    <img className="logo-navbar" src="https://res.cloudinary.com/dri0nimpy/image/upload/v1669499191/Logo2_xkuwlq.png" alt="" />
                </Link>
            </div>
            <ul className="navbar">
                <Link className="navbar-item" to="/category/promocionales"> Promocionales</Link>
                <Link className="navbar-item" to="/category/imprenta"> Imprenta</Link>
                <Link className="navbar-item" to="/category/branding"> Branding</Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;