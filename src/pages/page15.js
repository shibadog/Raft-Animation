import '../css/page15.css';
import React from 'react'
import anime from "animejs";

function Page15(props){

  function animation() {
    let animation1 = anime.timeline().add({
      targets: '#Page15Request1',
      opacity: 1,
      translateX: [-73, 28],
      translateY: [129, -72],
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime({
          targets: '#Page15Request1',
          opacity: 1,
          translateX: [28, -73],
          translateY: [-72, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page15Request2',
      opacity: 1,
      translateX: [-73, 130],
      translateY: [129, 129],
      easing: "linear",
      duration: 2000,
      complete: function() {
        anime({
          targets: '#Page15Request2',
          opacity: 1,
          translateX: -73,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    });
  }
  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page15NodeDes" id="Page15NodeDes1">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page15Node" id="Page15Node1"/>
        <div className="Page15NodeDes" id="Page15NodeDes2">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent"> 任期: 0</div>
          <div className="NodeDesContent"> 投票数: 0/2</div>
        </div>
        <div className="Page15Node" id="Page15Node2"/>
        <div className="Page15NodeDes" id="Page15NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page15Node" id="Page15Node3"/>
        <div className="Page15Request" id="Page15Request1"/>
        <div className="Page15Request" id="Page15Request2"/>
        <div className="Page15Text" id="Page15Text1"> 候補者は他のノードに投票を要求します。 </div>
      </div>
  );
}

export default Page15;