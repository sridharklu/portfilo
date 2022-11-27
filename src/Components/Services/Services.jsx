import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../Services/resume.pdf';
import { motion } from 'framer-motion'


function Services() {
  const transition ={duration : 2, type:'spring'}
  return (
    <div className="services" id='services'>
      {/*left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          reiciendis odit? Earum deleniti <br/>deserunt ducimus obcaecati adipisci
          dolorum officia  fugit, animi doloremque sapiente, vero aliquam
          sed consectetur, saepe itaque molestiae?
        </span>
        <a href={Resume} download>

        <button className="button s-button">Download Cv</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div 
        whileInView={{ left: '14rem' }}
        initial={{ left:'25%' }}
        transition={transition}

        style={{ left:'14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
      
      <div style={{top:'12rem', left:'-4rem' }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        {/* Third  card */}
      
      <div style={{top:'19rem', left:'12rem' }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
      
    </div>
  );
}

export default Services;
