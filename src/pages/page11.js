import '../css/page11.css';
import React from 'react'

function Page11(props){


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page11Node" id="Page11Node1"/>
        <div className="Page11Text" id="Page11Text1"> <span id="Focus">候補者</span>状態、 </div>
      </div>
  );
}

export default Page11;