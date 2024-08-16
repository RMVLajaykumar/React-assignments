import React from 'react'
import './Intro.css'
// import Github from '../../img/github.png';
// import Instagram from '../../img/instagram.png';
// import LinkedIn from '../../img/linkedin.png';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {useContext} from 'react'
import {themeContext} from "../../Context";
// import { motion } from "framer-motion";
const Intro=() =>{
    // const transition = { duration: 2, type: "spring" };
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  
  return (
  <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span  style={{color:darkMode? 'white': '' }}>Hey! I Am</span>
            <span>Ajay kumar</span>
            <span>Java fullStack Developer with high level of
                experience in web designing and development, producting the 
                Quality work
            </span>
        </div>
        <button className="button i-button">Contact me</button>
        <div className="i-icons">
            <a href="https://github.com/RMVLajaykumar"> <img src={Github} altr=""/></a>
            <a href="https://www.linkedin.com/in/ajay-kumar-a8323re/"> <img src={LinkedIn} altr=""/></a>
           {/* <a href="https://www.instagram.com/ajay_kumar_517/"> </a> */}
           <img src={Instagram} altr=""/>
           
        </div>
    </div>
    <div className="i-right">
    <img src={Vector1} alt=""/>
    <img src={Vector2} alt=""/>
    <img src={boy} alt=""/>
    <img
    // intial={{left: '-36%'}}
    // whileInView={{left: '-24%'}}
    // transtion={transition}
    src={glassesimoji} alt=""/>
    <div style={{top: '-4%',left: '68%'}}>
        <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>

    </div>
     <div style={{top: '18rem',left: '0rem'}}>
        <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
     </div>
     {/* blur divs */}
     <div className="blur" style={{background:"rgb(238,210,255)"}}></div>
       <div className="blur"
        style={{
            background: '#C1F5FF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'

        }}
        ></div>
    </div>
  </div>
  )
}

export default Intro