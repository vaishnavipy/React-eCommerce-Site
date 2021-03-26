import React from "react"
import { useEffect, useState } from "react/cjs/react.development";
import formatPrice from "./formatprice"

const siteContext = React.createContext();


function SiteContextProvider({children}){


    const [showSidebar,setShowSidebar] = useState(false)

    const [rawdata,setRawdata] = useState([])

    const [data,setData] = useState([])

    const [cart,setCart] = useState([])

    const [quantityArr,setQuantityArr] = useState([{id:"",quantity:""}])

    const [noMatchFound,setNoMatchFound] = useState(false)

    const [showModal,setShowModal] = useState(false)

    useEffect(()=>{

        fetch("https://course-api.com/javascript-store-products")
        .then(response => response.json())
        .then(data =>  setRawdata(data))

    },[])

    useEffect(()=>{
        if(rawdata.length !== 0){
            setData(rawdata)
            setCart([rawdata[0]])
            setQuantityArr([{id : rawdata[0].id, quantity : 1 ,price: formatPrice(String(rawdata[0].fields.price)) }])
        }
    },[rawdata])

    function removeItem(id){

        setQuantityArr(prevArr => prevArr.filter(obj => obj.id != id)) 

        setCart(prevCart => prevCart.filter(obj => obj.id != id)) 

        
    }

    



    function handleQuantity(obj,operation){

        if(quantityArr.find(product => product.id === obj.id)){

            let temp = [...quantityArr]

            let index = quantityArr.findIndex(product => product.id === obj.id)

            if(operation === "increase"){

                temp[index].quantity = temp[index].quantity + 1;

                setQuantityArr(temp);

            }else if(operation === "decrease"){

                if(temp[index].quantity !== 1){

                temp[index].quantity = temp[index].quantity - 1; 

                setQuantityArr(temp);

                }else if(temp[index].quantity === 1){

                    removeItem(obj.id);
                    
                }
            }

          
        }else{

            setQuantityArr(prevState => [...prevState, {id:obj.id,quantity:1,price: formatPrice(String(obj.fields.price))}])

        }

    }

    function addToCart(obj){

        handleQuantity(obj,"increase")

        if(!cart.find(product => product.id === obj.id)){

            setCart(prevState => [...prevState,obj])
        }
    }

    function openSidebar(){
       
        setShowSidebar(prevState => !prevState)
    }  
    
    
    function calculateTotal(){

        if(quantityArr.length !== 0){

            return   quantityArr.reduce((sum,product) => sum + (product.price * product.quantity) ,0)
        }else{

            return 0
        }

    }


    function handleFilter(input){

        if(rawdata.length !== 0){
            let tempData = [...rawdata];

            if(input.search){ 

                tempData = rawdata.filter(obj => obj.fields.name.includes(input.search)) 
                
            }

            if(input.company !== "all"){
            
                tempData = tempData.filter(obj => obj.fields.company === input.company)
                
            }
            if(input.range){
            
                tempData = tempData.filter(obj =>  formatPrice(String(obj.fields.price)) <= Number(input.range) )
            
            }

            if(tempData.length == 0){
               
                setNoMatchFound(true)
            }else{
                setNoMatchFound(false)
            }

            setData(tempData)
    
        }
    }

    function openModal(){
        setShowModal(prevState => !prevState)
    }

    return(
    <siteContext.Provider value={{openSidebar,showSidebar,data,rawdata,addToCart,cart,removeItem,quantityArr,handleQuantity,calculateTotal,handleFilter,noMatchFound,openModal,showModal}}>
        {children}
    </siteContext.Provider>)

}

export {siteContext,SiteContextProvider}