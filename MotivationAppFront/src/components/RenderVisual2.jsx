import React from "react";
import '../MainPage.css'
import '../BarAnimation.css'

const RenderVisual2 = (props) => {
    const { text, responses2, setResponses2,
        showMore, setShowMore, calculateBarWidthVisual2 } = props
    
    return ( 
        <div>
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
      <div className="bar" style={{ width: `${calculateBarWidthVisual2()}%` }}></div>
      </div>
        </div>
     );
}
 
export default RenderVisual2;