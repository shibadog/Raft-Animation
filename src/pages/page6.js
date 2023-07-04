import '../css/page6.css';
import React from 'react'
import anime from "animejs";

function Page6(props){
  let obj1 = document.querySelector('#Page6Node1Text');
  if(obj1 !== null) obj1.innerHTML = 0;
  let obj2 = document.querySelector('#Page6Signal1');
  if(obj2 !== null) obj2.style.display = '';
  function animation(){
    anime.timeline().add({
      targets: '#Page6Signal1',
      opacity: 1,
      translateX: -100,
      translateY: 25,
    }, '-=600').add({
      targets: '#Page6Signal1',
      translateX: 180,
      easing: "linear",
      duration: 2500,
      complete: function(){
        let obj1 = document.querySelector('#Page6Signal1');
        obj1.style.display = 'none';
        anime({
          targets: '#Page6Signal1',
          opacity: 0,
          translateX: -90,
        });
        let obj2 = document.querySelector('#Page6Node1Text');
        obj2.innerHTML = 8;
      }
    }, '-=600').add({
      targets: '#Page6Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
    }).add({
      targets: '#Page6Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).restart();
  }

  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div id="Page6Node1"> <span id="Page6Node1Text"> 0 </span> </div>
        <div id="Page6Client1"> <span id="Page6Client1Text"> 8 </span> </div>
        <div id="Page6Signal1"/>
        <div id="Page6Text1"> <span id="Yellow"> Client </span> send its value to the <span id="Blue">node</span> </div>
        <div id="Page6Text2"> It's easy to come to agreement or <span id="Focus"> Consensus </span> with only one node. </div>
      </div>
  );
}

export default Page6;