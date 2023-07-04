import '../css/page33.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page33(props){

  let obj1 = document.querySelector('#Page33Node3');
  if(obj1 !== null) obj1.style.borderStyle = 'dotted';

  let obj2 = document.querySelector('#Page33Node4');
  if(obj2 !== null) obj2.style.borderStyle = 'dotted';

  let obj3 = document.querySelector('#Page33Node2');
  if(obj3 !== null) obj3.style.borderStyle = 'none';

  let obj4 = document.querySelector('#Page33VoteCount3');
  if(obj4 !== null) obj4.innerHTML = 'Vote Count: 2';
  let obj5 = document.querySelector('#Page33VoteCount4');
  if(obj5 !== null) obj5.innerHTML = 'Vote Count: 2';

  let obj6 = document.querySelector('#Page33VoteCount1');
  if(obj6 !== null) obj6.innerHTML = 'Voted For: C';
  let obj7 = document.querySelector('#Page33VoteCount2');
  if(obj7 !== null) obj7.innerHTML = 'Voted For: D';

  let obj8 = document.querySelector('#Page33NodeTerm2');
  if(obj8 !== null) obj8.innerHTML = 'Term: 1';

  // let obj3 = document.querySelector('#Page33NodeTerm1');
  // if(obj3 !== null) obj3.innerHTML = 'Term: 0';
  // let obj4 = document.querySelector('#Page33NodeTerm2');
  // if(obj4 !== null) obj4.innerHTML = 'Term: 0';
  //
  // let obj5 = document.querySelector('#Page33VoteCount1');
  // if(obj5 !== null) obj5.innerHTML = 'Vote Count: 0';
  // let obj6 = document.querySelector('#Page33VoteCount2');
  // if(obj6 !== null) obj6.innerHTML = 'Vote Count: 0';

  const progressBarRefs = useRef([]);
  const animationsRef = useRef(null);

  useEffect(() => {
    const progressBars = progressBarRefs.current;

    const animations = progressBars.map((progressBar, index) =>
        anime({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index), // 进度动画
          easing: 'linear',
          duration: 3000,
          delay: 1200,
          loop: false,
          direction: "normal",
          autoplay: true,
          complete: function () {
            let obj3 = document.querySelector('#Page33Node2');
            if(obj3 !== null) obj3.style.borderStyle = 'dotted';
            let obj4 = document.querySelector('#Page33VoteCount2');
            if(obj4 !== null) obj4.innerHTML = 'Vote Count: 1';
            let obj8 = document.querySelector('#Page33NodeTerm2');
            if(obj8 !== null) obj8.innerHTML = 'Term: 2';

          }
        })
    );

    animationsRef.current = animations;
    return () => {
      animations.forEach((animation) => animation.pause()); // 在组件卸载时停止动画
    };
  }, []);

  const getStrokeDashArray = (index) => {
    switch (index) {
      case 0:
        return ['20 251.2', '160 251.2'];
      case 1:
        return ['40 251.2', '251.2 251.2'];
      case 2:
        return ['1 251.2', '180 251.2'];
      case 3:
        return ['1 251.2', '100 251.2'];
      default:
        return [];
    }
  };

  function animation() {
    let animation1 = anime.timeline().add({
      targets: '#Page33Signal1',
      opacity: 1,
      translateX: -70,
      translateY: 70,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page33Signal1',
      translateX: -70,
      translateY: 125,
      easing: "linear",
      duration: 1300,
      complete: function () {
        let obj1 = document.querySelector('#Page33Node3');
        if(obj1 !== null) obj1.style.borderStyle = 'none';
        let obj2 = document.querySelector('#Page33VoteCount3');
        if(obj2 !== null) obj2.innerHTML = 'Vote Count: 0';
        let obj3 = document.querySelector('#Page33VoteCount1');
        if(obj3 !== null) obj3.innerHTML = 'Vote Count: 0';
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page33Signal2',
      opacity: 1,
      translateX: 125,
      translateY: 70,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page33Signal2',
      translateX: 125,
      translateY: 125,
      easing: "linear",
      duration: 1300,
      complete: function () {
        let obj1 = document.querySelector('#Page33Node4');
        if(obj1 !== null) obj1.style.borderStyle = 'none';
        let obj2 = document.querySelector('#Page33VoteCount4');
        if(obj2 !== null) obj2.innerHTML = 'Vote Count: 0';
        let obj3 = document.querySelector('#Page33VoteCount2');
        if(obj3 !== null) obj3.innerHTML = 'Vote Count: 0';
      }
    });
  }

  if(props.display) animation();

  useEffect(() => {
    if (props.display) {
      animationsRef.current.forEach((animation) => {
        animation.restart();
      });
    }
  }, [props.display]);

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page33NodeDes" id="Page33NodeDes1">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page33NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page33VoteCount1"> Voted For: C</div>
        </div>
        <div className="Page33Node" id="Page33Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page33ProgressBarBG1"
                cx="50"
                cy="50"
                r="40"
                stroke="#ddd"
                strokeWidth="10"
                fill="transparent"
            />
            <circle
                ref={(el) => (progressBarRefs.current[0] = el)}
                className="progress-bar-indicator"
                id="Page33ProgressBarIT1"
                cx="50"
                cy="50"
                r="40"
                stroke="#ff0000"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="0 251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
            />
          </svg>
        </div>

        <div className="Page33NodeDes" id="Page33NodeDes2">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page33NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page33VoteCount2"> Voted For: D</div>
        </div>

        <div className="Page33Node" id="Page33Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page33ProgressBarBG2"
                cx="50"
                cy="50"
                r="40"
                stroke="#ddd"
                strokeWidth="10"
                fill="transparent"
            />
            <circle
                ref={(el) => (progressBarRefs.current[1] = el)}
                className="progress-bar-indicator"
                id="Page33ProgressBarIT2"
                cx="50"
                cy="50"
                r="40"
                stroke="#ff0000"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="0 251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
            />
          </svg>
        </div>

        <div className="Page33NodeDes" id="Page33NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page33NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page33VoteCount3"> Vote Count: 1</div>
        </div>

        <div className="Page33Node" id="Page33Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page33ProgressBarBG3"
                cx="50"
                cy="50"
                r="40"
                stroke="#ddd"
                strokeWidth="10"
                fill="transparent"
            />
            <circle
                ref={(el) => (progressBarRefs.current[2] = el)}
                className="progress-bar-indicator"
                id="Page33ProgressBarIT3"
                cx="50"
                cy="50"
                r="40"
                stroke="#ff0000"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="0 251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
            />
          </svg>
        </div>

        <div className="Page33NodeDes" id="Page33NodeDes4">
          <div className="NodeDesContent"> Node d</div>
          <div className="NodeDesContent" id="Page33NodeTerm4"> Term: 1</div>
          <div className="NodeDesContent" id="Page33VoteCount4"> Vote Count: 1</div>
        </div>

        <div className="Page33Node" id="Page33Node4">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page33ProgressBarBG4"
                cx="50"
                cy="50"
                r="40"
                stroke="#ddd"
                strokeWidth="10"
                fill="transparent"
            />
            <circle
                ref={(el) => (progressBarRefs.current[3] = el)}
                className="progress-bar-indicator"
                id="Page33ProgressBarIT4"
                cx="50"
                cy="50"
                r="40"
                stroke="#ff0000"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="0 251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
        <div className="Page33Signal" id="Page33Signal1"/>
        <div className="Page33Signal" id="Page33Signal2"/>
        <div className="Page33Text" id="Page33Text1"> The nodes will wait for a new election and try again
          until one node receives a majority of votes and becomes a leader. </div>

      </div>
  );
}

export default Page33;