import '../css/page23.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page23(props){
  let obj1 = document.querySelector('#Page23Node2');
  if(obj1 !== null) obj1.style.borderStyle = 'none';
  let obj2 = document.querySelector('#Page23NodeTerm2');
  if(obj2 !== null) obj2.innerHTML = 'Term: 0';
  let obj3 = document.querySelector('#Page23VoteCount2');
  if(obj3 !== null) obj3.innerHTML = 'Vote Count: 0';

  const progressBarRefs = useRef([]);
  const animationsRef = useRef(null);

  useEffect(() => {
    const progressBars = progressBarRefs.current;

    const animations = progressBars.map((progressBar, index) =>
        anime({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index), // 进度动画
          easing: 'linear',
          duration: 3500,
          loop: false,
          direction: "normal",
          autoplay: true,
          complete: function() {
            let obj1 = document.querySelector('#Page23Node2');
            if(obj1 !== null) obj1.style.borderStyle = 'dotted';
            let obj2 = document.querySelector('#Page23NodeTerm2');
            if(obj2 !== null) obj2.innerHTML = 'Term: 1';
            let obj3 = document.querySelector('#Page23VoteCount2');
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
        return ['85.2 251.2', '220 251.2'];
      case 1:
        return ['150.1 251.2', '251.2 251.2'];
      case 2:
        return ['19.9 251.2', '188.4 251.2'];
      default:
        return [];
    }
  };

  const getDuration = (index) => {
    switch (index) {
      case 0:
        return 3000;
      case 1:
        return 3000;
      case 2:
        return 3000;
      default:
        return 1500;
    }
  };

  function animation() {
    let animetion1 = anime.timeline().add({
      targets: '#Page23Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3500,
    }).add({
      targets: '#Page23Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
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
        <div className="Page23NodeDes" id="Page23NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
          <div className="NodeDesContent" id="Page23VoteCount1"> Vote Count: 0</div>
        </div>
        <div className="Page23Node" id="Page23Node1">
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

        <div className="Page23NodeDes" id="Page23NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page23NodeTerm2"> Term: 0</div>
          <div className="NodeDesContent" id="Page23VoteCount2"> Vote Count: 0</div>
        </div>

        <div className="Page23Node" id="Page23Node2">
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

        <div className="Page23NodeDes" id="Page23NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
          <div className="NodeDesContent" id="Page23VoteCount3"> Vote Count: 0</div>
        </div>

        <div className="Page23Node" id="Page23Node3">
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

        <div className="Page23Text" id="Page23Text1"> After the election timeout the follower becomes a candidate and starts a new <span id="Focus"> election term </span>... </div>
        <div className="Page23Text" id="Page23Text2"> ...votes for itself... </div>
      </div>
  );
}

export default Page23;