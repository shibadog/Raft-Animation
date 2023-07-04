import '../css/page4.css';
import React from 'react'
import anime from "animejs";

function Page4(props){
  function animation(){
    console.log("I'm in page 4 now");
    anime.timeline().add({
      targets: '#Page4Node',
      scale: [4,1],
      duration: 500,
      easing: 'spring',
    }).add({
      targets: '#Page4Text1',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
    }, '-=1650');
  }
    if(props.display) animation();

    return(
        <div style={{display: props.display?'': 'none'}}>
          <div id="Page4Node"> 0 </div>
          <div id="Page4Text1"> Now the node stores value <span id="White"> 0 </span></div>
        </div>
    );
}

export default Page4;