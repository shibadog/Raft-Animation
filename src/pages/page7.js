import '../css/page7.css';
import React from 'react'
import anime from "animejs";

function Page7(props){
  let objs = document.getElementsByClassName('Page7Node');
  [].forEach.call(objs, element => element.style.opacity = 0);
  function animation(){
    anime.timeline().add({
      targets: '#Page7Node1',
      opacity: 0,
      translateX: 150,
    }, '-=1500').add({
      targets: '#Page7Node2',
      opacity: 0,
      translateX: 150,
    }, '-=1500').add({
      targets: '#Page7Node3',
      opacity: 0,
      translateX: 150,
    }, '-=1500').add({
      targets: '#Page7Node1',
      opacity: [0, 1],
      translateX: [150, 50],
      translateY: [0, 100],
      easing: "linear",
      duration: 500,
    }).add({
      targets: '#Page7Node2',
      opacity: [0, 1],
      translateX: [150, 250],
      translateY: [0, 100],
      easing: "linear",
      duration: 500,
    }).add({
      targets: '#Page7Node3',
      opacity: [0, 1],
      translateY: [0, -100],
      easing: "linear",
      duration: 500,
    }).add({
      targets: '#Page7Text1',
      scaleX: [1, 0],
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 500,
    }).add({
      targets: '#Page7Text2',
      scaleX: [0, 1],
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 500,
    }).restart();
  }
  if(props.display) animation();


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page7Node" id="Page7Node1"> 8 </div>
        <div className="Page7Node" id="Page7Node2"/>
        <div className="Page7Node" id="Page7Node3"/>
        <div className="Page7Client" id="Page7Client1"> 8 </div>
        <div className="Page7Text" id="Page7Text1"> しかし、複数のノードがある場合は？ </div>
        <div className="Page7Text" id="Page7Text2"> それが<span id="Focus">分散合意</span>の問題です。</div>
      </div>
  );
}

export default Page7;