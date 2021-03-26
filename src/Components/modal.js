import React from "react"
import {Link} from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import {siteContext} from "../sitecontext"

function Modal(){
    const {showModal,openModal} = useContext(siteContext)

    return(  
        
    <div className={showModal ? "modal showModal" : "modal hideModal"}>
        <div className="close-modal" onClick={openModal}>X</div>

        <div className="modal-links" >
            <Link to="/React-eCommerce-Site/" className="links" > <span>Home</span></Link>
            <Link to="/React-eCommerce-Site/products" className="links" ><span>Products</span></Link>
            <Link to="/React-eCommerce-Site/about" className="links"><span>About</span></Link>
        </div>
    </div>)
}
export default Modal;