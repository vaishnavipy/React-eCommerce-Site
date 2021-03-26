import React, { useContext } from "react"
import Breadcrumb from "./breadcrumb"
import Sidebar from "./sidebar"
import {siteContext} from "../sitecontext"
import Navbar from "./navbar"
import Modal from "./modal"


function About({position,color,logo}){

    const {showSidebar,showModal} = useContext(siteContext)

    return(
    <div className={showSidebar || showModal ? "blur" : ""}>

        <Navbar position={position} color={color} logo={logo}/>

        <Breadcrumb page="About"/>

        <div className="about-content">
            <h1 className="section-title"><span>/ </span>Our History</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
        </div>

        <Sidebar />

        <Modal />

    </div>
    )
}
export default About