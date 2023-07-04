import '../css/page2.css'
import React from "react";
import anime from "animejs";

function Page2(props){

  function animation(){
    anime.timeline().add({
      targets: '#Page2Text1',
      scale: [0,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1)
    }).add({
      targets: '#Page2Text2',
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
        <h1 id="Page2Text1" style={{display: props.display?'': 'none'}}>
          So What is <span id="Focus"> Distributed Consensus</span>?
          <div id="Page2Text2">
            Let's start with an example...
          </div>
        </h1>
      </div>
  );
}

export default Page2;