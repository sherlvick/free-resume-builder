import React from "react";
import './Summary.scss';

export const Summary = React.memo(({ summary }) => {
 
  return (
    <div className="simple-template__summary">
      <h2 className="sideheading">Summary</h2>
      <hr className="line"></hr>
      <p className="simple-template__summary__description">
        {summary.description}
      </p>
    </div>
  );
});
