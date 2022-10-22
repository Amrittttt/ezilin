import React from 'react'
import "animate.css"
import { NavLink } from 'react-router-dom';
import web from "../src/pica.png"
import Common from './Common';



const About = () => {
  return (
    <div>
      <Common name='Welcome to About page' imgsrc={web} visit="/contact" btname="Contact Now"/>
    </div>
  );
};

export default About;
