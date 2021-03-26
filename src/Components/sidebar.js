
import React, { useContext } from "react"
import { useEffect, useState } from "react/cjs/react.development"
import {siteContext} from "../sitecontext"
import formatPrice from "../formatprice"

function Sidebar(){

    const {showSidebar,openSidebar,cart,calculateTotal,quantityArr} = useContext(siteContext)

    const [cartItems,setCartItems] = useState([])

    const [total,setTotal] = useState(0)

   useEffect(()=>{
       
    if(cart.length !== 0){
        setCartItems(
            cart.map((obj,i) =>{
               
        
                return(<CartItem obj={obj} i={i}/>)
               
            })
        )
    }else{
        setCartItems([])
    }

   },[cart])

   useEffect(()=>{
      
       setTotal(calculateTotal().toFixed(2))
   },[quantityArr])



   

    return(
   
    <div className={showSidebar ? "sidebar show-sidebar" : "sidebar hide-sidebar"}>
      
       
        <div className="close-sidebar" onClick={openSidebar}>X</div>
        <h1>Your Bag</h1>
        <div className="cart-div">
            {cartItems}
        </div>

        <div className="total-checkout">
            <h1>Total : $ {total}</h1>
            <button >Checkout</button>
        </div>
   
    </div>)
}


function CartItem({obj,i}){
    const {image,name,price} = obj.fields;

    const {removeItem,quantityArr,handleQuantity} = useContext(siteContext)
   

    function handleRemove(){
       
        removeItem(obj.id)
    }
    function getQuantity(){

        if(quantityArr.find(product => product.id == obj.id)){
       
            return quantityArr.find(product => product.id == obj.id).quantity
        
        }
    }

    function handleIncrease(){
        handleQuantity(obj,"increase")
    }
    
    function handleDecrease(){
        handleQuantity(obj,"decrease")
    }


    return(
    <div className="cart-items" key={i}>
        <div className="cart-img"><img src={image[0].url} /></div>
        <div>
            <h4>{name}</h4>
            <p className="cart-price">$ {formatPrice(String(price))}</p>
            <p className="remove" onClick={handleRemove}>remove</p>
        </div>
        <div className="cart-flex">
            <div className="increase" onClick={handleIncrease}>🔼</div>
            <div>{getQuantity()}</div>
            <div className="decrease" onClick={handleDecrease}>🔽</div>
        </div>
    </div>
    )
}


export default Sidebar