import '../css/page13.css';
import React from 'react'

function Page13(props){

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page13NodeDes" id="Page13NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page13Node" id="Page13Node1"/>
        <div className="Page13NodeDes" id="Page13NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page13Node" id="Page13Node2"/>
        <div className="Page13NodeDes" id="Page13NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page13Node" id="Page13Node3"/>
        <div className="Page13Text" id="Page13Text1"> All the nodes start in the follower state. </div>
      </div>
  );
}

export default Page13;