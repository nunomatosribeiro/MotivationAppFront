import React from "react";
import '../MainPage.css'
import '../BarAnimation.css'

const RenderVisual1 = (props) => {
  const { text, responses1, setResponses1,
    showMore, setShowMore, calculateBarWidthVisual1 } = props

     
    return ( 
        <div className="allFormDiv">
<div className="visualRepresentationDiv">
      <h2>Check here your answers</h2>
      <div>
        <h6>
        {showMore ? text : `${text.slice(0, 125)}${text.length > 125 ? '...' : ''}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>
      {showMore ? 'Show less' : 'Show more'}
      </button>
      </h6>
      </div>
      <div className="bar" style={{ width: `${calculateBarWidthVisual1()}%` }}></div>
      </div>
    
        </div>
       
       );
}
 
export default RenderVisual1;