import React from 'react'
import "animate.css"
import { NavLink } from 'react-router-dom';
import web from "../src/pica.png"



const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-centre">
      <div className="container-fluid">
      <div className='row'>
        <div className='col-13 mx-auto'>
          <div className="row">
              <div className='col-10 md-15 pt-5 pt-lg-0 order-lg-1 justify-content-centre column'>
              <h1 class="animate__animated animate__fadeInBottomLeft">   
              {props.name}
                  <strong className="brand-name"><font color="skyblue"> EZILIN</font></strong></h1>
                <h4 className="animate__animated animate__fadeInBottomRight">
                We are the team of talented developer making websites</h4>
              <div className="mt-3">
                <NavLink to={props.visit} className="btn">
                  {props.btname}
                  </NavLink>
              </div>
              </div>
              
              <div className='col-lg-7 order-1 order-lg-2 header-img'>
              <centre><img src={props.imgsrc} className="img-fluid animated" alt="Home img"/></centre>
              <div className="background-image">
                
              </div>
             

          
                
              </div>
              </div>
        </div>
      </div>
    </div>

      </section>
    </div>
  );
};

export default Common;
