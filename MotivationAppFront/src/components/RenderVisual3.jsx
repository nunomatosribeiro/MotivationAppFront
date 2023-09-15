import React from "react";
import '../MainPage.css'
import '../BarAnimation.css'

const RenderVisual3 = (props) => {
    const { text, responses3, setResponses3,
        showMore, setShowMore, calculateBarWidthVisual3 } = props
    
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
      <div className="bar" style={{ width: `${calculateBarWidthVisual3()}%` }}></div>
      </div>
        </div>
     );
}
 
export default RenderVisual3;
/*
      const renderVisual3 = () => {
        if(submitted){
        // Verifique as respostas para decidir o que mostrar
        if (responses.question1 === "1" && responses.question2 === "1" ) {
          return <div className="circle-large">Big Circle</div>;
        } else if(responses.question1 === "2" && responses.question2 === "2") {
          return <div className='circle-mid'>Mid Circle</div>
        } else{
          return <div className="circle-small">Small Circle</div>;
        }
      }
      }; */