import '../css/page9.css';
import React from 'react'

function Page9(props){


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page9Node" id="Page9Node1"/>
        <div className="Page9Text" id="Page9Text1"> A node can be in 1 of 3 states: </div>
      </div>
  );
}

export default Page9;