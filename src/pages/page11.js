import '../css/page11.css';
import React from 'react'

function Page11(props){


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page11Node" id="Page11Node1"/>
        <div className="Page11Text" id="Page11Text1"> The <span id="Focus"> Candidate </span> state, </div>
      </div>
  );
}

export default Page11;