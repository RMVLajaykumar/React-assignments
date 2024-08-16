import React,{useContext} from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {themeContext} from '../../Context'
const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               <br/>
                Praesentium illum ad nobis deleniti quis. Alias, deserunt tempore  ullam distinctio.
              <br/>
              ipsum dolor sit amet consectetur adipisicing elit
              <br/>
              Praesentium illum ad nobis deleniti quis. Alias, deserunt
            </span>
           
            <button className="button s-button">Hire me</button>
            
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
           {/* right side */}
           <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCirlce">
                    <img src={Upwork} alt=""/>
                </div>
                <div className="w-secCirlce">
                    <img src={Fiverr} alt=""/>
                </div>
                <div className="w-secCirlce">
                    <img src={Amazon} alt=""/>
                </div>{" "}
                <div className="w-secCirlce">
                    <img src={Shopify} alt=""/>
                </div>
                <div className="w-secCirlce">
                    <img src={Facebook} alt=""/>
                </div>
            </div>
            {/* background colors */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
           </div>

    </div>
  )
}

export default Works