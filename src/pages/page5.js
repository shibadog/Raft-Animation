import '../css/page5.css';
import React from 'react'
import anime from "animejs";

function Page5(props){
  function animation(){
    anime.timeline().add({
      targets: '#Page5Node1',
      translateX: 0,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInExpo',
    }).add({
      targets: '#Page5Node1',
      translateX: 150,
      duration: 500,
      easing: 'spring',
    }).add({
      targets: '#Page5Client1',
      translateX: 0,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInExpo',
    }, '-=500').add({
      targets: '#Page5Client1',
      translateX: -150,
      easing: 'spring',
      duration: 500,
    }).add({
      targets: '#Page5Text1',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
    }, '-=500');
  }
  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div id="Page5Node1"> 0 </div>
        <div id="Page5Client1"> <span id="Page5Point2Text"> 8 </span> </div>
        <div id="Page5Text1"> <span id="Blue">ノード</span>に値を送信できる<span id="Yellow">クライアント</span>もあります </div>
      </div>
  );
}

export default Page5;