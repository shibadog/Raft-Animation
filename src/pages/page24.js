import '../css/page24.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page24(props){
  let obj = document.querySelector('#Page24VoteCount1');
  if(obj !== null) obj.innerHTML = 'Vote Count: 0';
  let obj1 = document.querySelector('#Page24VoteCount3');
  if(obj1 !== null) obj1.innerHTML = 'Vote Count: 0';

  let obj2 = document.querySelector('#Page24NodeTerm1');
  if(obj2 !== null) obj2.innerHTML = 'Term: 0';
  let obj3 = document.querySelector('#Page24NodeTerm3');
  if(obj3 !== null) obj3.innerHTML = 'Term: 0';

  const progressBarRefs = useRef([]);
  const animationsRef = useRef(null);

  useEffect(() => {
    const progressBars = progressBarRefs.current;

    const animations = progressBars.map((progressBar, index) =>
        anime({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index), // 进度动画
          easing: 'linear',
          duration: 2200,
          loop: false,
          direction: "normal",
          autoplay: true,
          complete: function() {
            let obj2 = document.querySelector('#Page24NodeTerm2');
            if(obj2 !== null) obj2.innerHTML = 'Term: 1';
            let obj3 = document.querySelector('#Page24VoteCount2');
            if(obj3 !== null) obj3.innerHTML = 'Vote Count: 1';
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
        return ['220 251.2', '235 251.2'];
      case 1:
        return ['0 251.2', '15 251.2'];
      case 2:
        return ['188.4 251.2', '203.4 251.2'];
      default:
        return [];
    }
  };


  function animation() {
    let animation1 = anime.timeline().add({
      targets: '#Page24Request1',
      opacity: 1,
      translateX: [-73, 28],
      translateY: [129, -72],
      easing: "linear",
      duration: 2500,
      complete: function () {
        let obj2 = document.querySelector('#Page24NodeTerm1');
        if(obj2 !== null) obj2.innerHTML = 'Term: 1';
        let obj3 = document.querySelector('#Page24VoteCount1');
        if(obj3 !== null) obj3.innerHTML = 'Voted For: A';
        console.log(obj3.innerHTML);
        anime({
          targets: '#Page24Request1',
          opacity: 1,
          translateX: [28, -73],
          translateY: [-72, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page24Request2',
      opacity: 1,
      translateX: [-73, 130],
      translateY: [129, 129],
      easing: "linear",
      duration: 2500,
      complete: function() {
        let obj2 = document.querySelector('#Page24NodeTerm3');
        if(obj2 !== null) obj2.innerHTML = 'Term: 1';
        let obj3 = document.querySelector('#Page24VoteCount3');
        if(obj3 !== null) obj3.innerHTML = "Voted For: A";
        anime({
          targets: '#Page24Request2',
          opacity: 1,
          translateX: [130, -73],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });
  }

  if(props.display) animation();

  useEffect(() => {
    if (props.display) {
      animation();
      animationsRef.current.forEach((animation) => {
        animation.restart();
      });
    }
  }, [props.display]);

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page24NodeDes" id="Page24NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page24NodeTerm1"> Term: 0</div>
          <div className="NodeDesContent" id="Page24VoteCount1"> Vote Count: 0</div>
        </div>
        <div className="Page24Node" id="Page24Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
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

        <div className="Page24NodeDes" id="Page24NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page24NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page24VoteCount2"> Vote Count: 1</div>
        </div>

        <div className="Page24Node" id="Page24Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
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

        <div className="Page24NodeDes" id="Page24NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page24NodeTerm3"> Term: 0</div>
          <div className="NodeDesContent" id="Page24VoteCount3"> Vote Count: 0</div>
        </div>

        <div className="Page24Node" id="Page24Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
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
        <div className="Page24Request" id="Page24Request1"/>
        <div className="Page24Request" id="Page24Request2"/>
        <div className="Page24Text" id="Page24Text1"> ...and sends out <span id="Focus"> Request Vote </span> messages to other nodes.</div>
      </div>
  );
}

export default Page24;