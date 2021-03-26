import React from "react"

function Breadcrumb({page}){

    return(
    <div className="breadcrumb">
        <div className="container">
            <h1>Home / {page}</h1>

        </div>
    </div>)
}
export default Breadcrumb;