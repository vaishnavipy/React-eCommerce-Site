import React, { useContext } from "react"
import {GiMagnifyingGlass} from "react-icons/gi"
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom"
import { siteContext } from "../sitecontext";
import formatPrice from "../formatprice"

function Roomgrid({obj,i}){

    const {addToCart,openSidebar} = useContext(siteContext)

    const {image,name,price} = obj.fields;

    function handleAddToCart(){
        addToCart(obj);
        openSidebar();
    }

    
    return(
    <div className="room-grid" key={i}>
        <div className="room-img">
            <img src={image[0].url}/>
           <Link to={`/React-eCommerce-Site/products/id=${obj.id}`}> <span className="room-icons magnify" >< GiMagnifyingGlass/></span></Link>  
           <span className="room-icons room-cart" onClick={handleAddToCart}><FaShoppingCart/></span>
        </div>
        <div>
            <p className="room-name">{name}</p>
            <p className="room-price">${formatPrice(String(price))}</p>
        </div>
    </div>
    )

}

export default Roomgrid;