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
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page15Node" id="Page15Node1"/>
        <div className="Page15NodeDes" id="Page15NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
          <div className="NodeDesContent"> Vote Count: 0/2</div>
        </div>
        <div className="Page15Node" id="Page15Node2"/>
        <div className="Page15NodeDes" id="Page15NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page15Node" id="Page15Node3"/>
        <div className="Page15Request" id="Page15Request1"/>
        <div className="Page15Request" id="Page15Request2"/>
        <div className="Page15Text" id="Page15Text1"> The candidate then requests votes from other nodes. </div>
      </div>
  );
}

export default Page15;