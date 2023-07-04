import '../css/page3.css';
import React from 'react'
import anime from "animejs";

function Page3(props){
  function animation(){
    anime({
      targets: '#Page3Point',
      scale: 3,
      duration: 4000,
      easing: 'linear',
      complete: function () {
        console.log("rerendering");
        anime({
          targets: '#Page3Point',
          scale: 1,
          duration: 5000,
          easing: 'linear'
        });
      }
    });
    anime.timeline().add({
      targets: '#Page3Text1',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 700,
      delay: 1000
    }, '-=1000').add({
      targets: '#Page3Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 500,
      delay: 1000
    }).add({
      targets: '#Page3Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 700,
      delay: 500
    }).add({
      targets: '#Page3Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 500,
      delay: 2000
    }).add({
      targets: ['#Page3Text3','#Page3Text4'],
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 500,
      delay: 1000
    });
  }
    if(props.display) animation();

    return(
        <div style={{display: props.display?'': 'none'}}>
          <div id="Page3Point"/>
          <div id="Page3Text1"> This is a <span id="Blue">node</span> </div>
          <div id="Page3Text2"> Let's say we have a single <span id="Blue">node</span> system </div>
          <div id="Page3Text3"> For example, you can think of the <span id="Blue">node</span> as a database server <br /> that stores a single value.</div>
        </div>
    );
}

export default Page3;