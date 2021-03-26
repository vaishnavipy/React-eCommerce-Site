import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { siteContext } from "../sitecontext"
import Breadcrumb from "./breadcrumb"
import Sidebar from "./sidebar"
import formatPrice from "../formatprice"
import Navbar from "./navbar"
import Modal from "./modal"

function SingleProduct({position,color,logo}){

    const {data,showSidebar,addToCart,showModal} = useContext(siteContext)

    const {slug} = useParams()

    const product = data.find(obj => obj.id === slug)

    const {name,image,company,price} = product.fields
    
    

    return(
    <div className={showSidebar || showModal ? "blur" : ""}>

    <Navbar position={position} color={color} logo={logo}/>
       
       <Breadcrumb page={name}/>

       <div className="singleproduct">
           <div className="singleproduct-grid container">
               <div className="single-img"><img src={image[0].url}/></div>
               <div>
                   <h1 className="product-title">{name}</h1>
                   <p className="product-company">BY {company}</p>
                   <p className="product-price">$ {formatPrice(String(price))}</p>
                   <p className="product-description">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                   <button onClick={()=>(addToCart(product))}>Add To Cart</button>
               </div>
           </div>
       </div>

       <Sidebar />
       
       <Modal />

    </div>)
}

export default SingleProduct