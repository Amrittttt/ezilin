import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/pic.jpg"

const Card = (props) => {
    return (
    <>
  
        <div className="col-md-4 col-1 mx-auto">
  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
  <div className="card-body">
    <h5 className="animate__animated animate__fadeInBottomLeft"><h3>{props.title}</h3></h5>
    <p className="animate__animated animate__fadeInLeft">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    < NavLink to="" className="btn-g">Apply</NavLink>
  
</div>
</div>



    
    </>
  );
};

export default Card;
