
import React, { useContext } from "react"
import Breadcrumb from "./breadcrumb"
import Sidebar from "./sidebar"
import {siteContext} from "../sitecontext"
import Roomgrid from "./roomgrid"
import { useEffect, useState } from "react/cjs/react.development"
import Navbar from "./navbar"
import Modal from "./modal"

function Products({position,color,logo}){
    const {showSidebar,data,handleFilter,noMatchFound,showModal} = useContext(siteContext)

    const companyFilters = document.querySelectorAll(".company-filter p");

    const allRooms = data.map((obj,i) => {
        return(<Roomgrid obj={obj} i={i}/> )
    })

    const [input,setInput] = useState({search:"",company:"all",range:80})


    function handleChange(e){
        const {name,value} =e.target;

        setInput(prevState => ({...prevState,[name]:value}))
        
    }

    function selectCompany(e){
      
       if(e.target.nodeName === "P"){
           let elm = e.target;
           setInput(prevState => ({...prevState,company:elm.id}))
          
           companyFilters.forEach(elm => elm.classList.remove("border"))
           elm.classList.add("border");
       }
    }
    useEffect(()=>{
        handleFilter(input)
    },[input])

    return( 
    <div className={showSidebar || showModal ? "products blur" : "products"}>

        <Navbar position={position} color={color} logo={logo}/>

        <Breadcrumb page="Products"/>

        <div className="products-content">
            <div className="container">
                <div className="products-grid">
                    <div className="filters">
                        <div><input type="text" placeholder="Search.." name="search" value={input.search} onChange={handleChange}/></div>
                        <div className="company-filter" onClick={selectCompany}>
                            <h3>Company</h3>
                            <p id="all">All</p>
                            <p id="ikea">Ikea</p>
                            <p id="marcos">Marcos</p>
                            <p id="caressa">Caressa</p>
                            <p id="liddy">Liddy</p>
                        </div>
                        <h3>Price</h3>
                        <input type="range" min="0" max="80" value={input.range} onChange={handleChange} name="range"/>
                        <p>Value : ${input.range} </p>
                    </div>

                    {noMatchFound ? 
                    <h1 style={{alignSelf:"center",justifySelf:"center"}}>Unfortunately , No Matches For Your Search</h1> 
                    :  
                    <div className="allproducts-container">{allRooms}</div> }
                   
            </div>
            </div>
        </div>

    <Sidebar />

    <Modal />

</div>)
}

export default Products