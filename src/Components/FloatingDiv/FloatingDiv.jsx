import React from 'react'
import './Floating.css';

const FloatingDiv = ({image}) => {
  return (
  <div className="floatingdiv">
      <img src={image} alt="" />
      <span>
          web
          <br/>
          Developer


      </span>
  </div>
  )
}

export default FloatingDiv
