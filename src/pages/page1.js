import '../css/page1.css'
import React from "react";
import anime from "animejs";

function Page1(props){

  function animation(){
    anime.timeline().add({
      targets: '#Page1Text1',
      scale: [0,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1)
    }).add({
      targets: '#Page1Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    });
  }
  if(props.display) animation();
  return(
      <div className="title">
        <h1 id="Page1Text1" style={{display: props.display?'': 'none'}}>
          Raft
          <div id="Page1Text2">
            Understandable Distributed Consensus
          </div>
        </h1>
      </div>
  );
}

export default Page1;