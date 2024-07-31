import React from 'react'

import "./Background.css"


function Background() {
    const numberOfBoxes = 100; // Number of boxes to display

    return (
     <div className='container'>
       <div className="grid-container">
        {Array.from({ length: numberOfBoxes }).map((_, index) => (
          <div key={index} className="box"></div>
          
        ))}

       
      </div>
     </div>
    );
  };

export default Background