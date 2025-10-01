import '../css/page21.css'
import React from "react";
import anime from "animejs";

function Page21(props){

  function animation(){
    anime.timeline().add({
      targets: '#Page21Text1',
      scale: [0,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1)
    });
  }
  if(props.display) animation();
  return(
      <div className="title">
        <h1 id="Page21Text1" style={{display: props.display?'': 'none'}}>
          リーダー選出
        </h1>
      </div>
  );
}

export default Page21;