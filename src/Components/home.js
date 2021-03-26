
import React, { useContext } from "react"
import { siteContext } from "../sitecontext"
import Sidebar from "./sidebar"
import Roomgrid from "./roomgrid"
import Navbar from "./navbar"
import Modal from "./modal"
import {useHistory} from "react-router-dom"


function Home({position,color,logo}){

    const {showSidebar,rawdata,showModal} = useContext(siteContext)

    let history = useHistory()

    const featured = rawdata.filter(obj => obj.fields.featured).map((obj,i) => {
       
        return(<Roomgrid obj={obj} i={i}/> )
    })
    

function goToProducts(){
    history.push("/React-eCommerce-Site/products")
}

    return(
    <div className="home">    
            <Navbar position={position} color={color} logo={logo}/>
            <div className={showSidebar || showModal ? "home-screen blur" : "home-screen"}>
                <div className="container">
                    <h1>Rest, Relax, Unwind</h1>
                    <p>Embrace your choices - we do</p>
                    <button onClick={goToProducts}>SHOW NOW</button>
                </div>

            </div>
        <div className={showSidebar || showModal ? "featured blur" : "featured"}>
            <div className="container">
                <h1 className="section-title"><span>/</span> Featured</h1>

                <div className="featured-grid">
                    {featured}
                </div>

                <button className="all-products" onClick={goToProducts}>All Products</button>

            </div>  
        </div>
        
    

        <Sidebar />

       <Modal />

    </div>
   
    
    )
}

export default Home