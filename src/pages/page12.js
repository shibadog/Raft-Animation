import '../css/page12.css';
import React from 'react'

function Page12(props){


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page12Node" id="Page12Node1"/>
        <div className="Page12Text" id="Page12Text1"> <span id="Focus">リーダー</span>状態。 </div>
      </div>
  );
}

export default Page12;