
import './App.css';
import Navbar from "./Components/navbar"
import {Switch,Route, useLocation} from "react-router-dom"
import Home from "./Components/home"
import Products from "./Components/products"
import About from "./Components/about"
import { useEffect,useState } from 'react/cjs/react.development';
import SingleProduct from "./Components/singleproduct"

function App() {

  let location = useLocation();

  const [navposition,setNavPosition] = useState("absolute")

  const [color,setColor] = useState("white")

  const [logo,setLogo] = useState("https://vanilla-js-store.netlify.app/images/logo-white.svg")

  useEffect(()=>{

    if(location.pathname === "/React-eCommerce-Site/"){

      setNavPosition("absolute")
      setColor("white")
      setLogo("https://vanilla-js-store.netlify.app/images/logo-white.svg")

    }else{
      setNavPosition("static")
      setColor("#112A43")
      setLogo("https://vanilla-js-store.netlify.app/images/logo-black.svg")
    }

  },[location])
  
  return(
  <div>
    

    <Switch>
      <Route exact path="/React-eCommerce-Site/"><Home  position={navposition} color={color} logo={logo}/></Route>
      <Route exact path="/React-eCommerce-Site/products"><Products  position={navposition} color={color} logo={logo}/></Route>
      <Route exact path="/React-eCommerce-Site/about"><About  position={navposition} color={color} logo={logo}/></Route>
      <Route exact path="/React-eCommerce-Site/products/id=:slug"><SingleProduct  position={navposition} color={color} logo={logo}/></Route>
    </Switch>

  </div>)
  
}

export default App;
