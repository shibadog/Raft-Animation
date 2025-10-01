import '../css/page10.css';
import React from 'react'

function Page10(props){


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page10Node" id="Page10Node1"/>
        <div className="Page10Text" id="Page10Text1"> <span id="Focus">フォロワー</span>状態。 </div>
      </div>
  );
}

export default Page10;