import React from "react";
import web from "../src/pic.jpg"

const bg = () => {
    return(
        <div id="bg" className="bg">
            <div className="content">
            <img src={web} className="bg" alt="home img"/>
            </div>
            
        </div>
    )

    
}
export default bg;