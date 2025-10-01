import '../css/page8.css';
import React from 'react'
import anime from "animejs";

function Page8(props){

  function animation(){
    anime.timeline().add({
      targets: '#Page8Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
    }, '+=2000').add({
      targets: '#Page8Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    });
  }
  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page8Node" id="Page8Node1"/>
        <div className="Page8Node" id="Page8Node2"/>
        <div className="Page8Node" id="Page8Node3"/>
        <div className="Page8Text" id="Page8Text1"> <span id="Focus">Raft</span>は分散合意を実装するためのプロトコルです。 </div>
        <div className="Page8Text" id="Page8Text2"> その仕組みの概要を見てみましょう。 </div>
      </div>
  );
}

export default Page8;