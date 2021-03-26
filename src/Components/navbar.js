import React, { useContext } from "react"
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import {siteContext} from "../sitecontext"
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar({position,color,logo}){

    const {openSidebar,cart,showSidebar,openModal} = useContext(siteContext)

   
    return(
    <div className={showSidebar? "nav-outer " :"nav-outer"} style={{position:position}}>    
    <div className="container navbar" style={{color:color}}>
        <div className="nav-links" >
            <Link to="/React-eCommerce-Site/" className="links" style={{color:color}}> <span>Home</span></Link>
            <Link to="/React-eCommerce-Site/products" className="links" style={{color:color}}><span>Products</span></Link>
            <Link to="/React-eCommerce-Site/about" className="links" style={{color:color}}><span>About</span></Link>
        </div>

        <div className="hamburger-menu" onClick={openModal}><GiHamburgerMenu /></div>

        <img src={logo} />

        <div className="cart" onClick={openSidebar}><div className="cart-no">{cart.length}</div><FaShoppingCart /></div>
    </div>
    </div>)
}
export default Navbar