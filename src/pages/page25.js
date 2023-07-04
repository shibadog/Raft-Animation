import '../css/page25.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page25(props){
  let obj = document.querySelector('#Page25VoteCount2');
  if(obj !== null) obj.innerHTML = 'Vote Count: 1';
  let obj1 = document.querySelector('#Page25Node2');
  if(obj1 !== null) obj1.style.borderStyle = 'dotted';
  let obj2 = document.querySelector('#Page25ProgressBarBG');
  if(obj2 !== null) obj2.style.display = '';
  let obj3 = document.querySelector('#Page25ProgressBarIT');
  if(obj3 !== null) obj3.style.display = '';


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
          delay: 7000,
          complete: function() {
            let obj3 = document.querySelector('#Page25VoteCount2');
            if(obj3 !== null) obj3.innerHTML = 'Vote Count: 3';

            let obj2 = document.querySelector('#Page25Node2');
            obj2.style.borderStyle = 'solid';

            let obj1 = document.querySelector('#Page25ProgressBarBG');
            if(obj1 !== null) obj1.style.display = 'none';
            let obj = document.querySelector('#Page25ProgressBarIT');
            if(obj !== null) obj.style.display = 'none';

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
        return ['1 251.2', '25 251.2'];
      case 1:
        return ['15 251.2', '40 251.2'];
      case 2:
        return ['1 251.2', '25 251.2'];
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
    let animation1 = anime.timeline().add({
      targets: '#Page25Signal1',
      opacity: 1,
      translateX: [28, -73],
      translateY: [-72, 129],
      easing: "linear",
      duration: 2500,
      delay: 7000,
      complete: function () {
        anime({
          targets: '#Page25Signal1',
          opacity: 1,
          translateX: [-73, 28],
          translateY: [129, -72],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page25Signal2',
      opacity: 1,
      translateX: [127, -73],
      translateY: [129, 129],
      easing: "linear",
      duration: 2500,
      delay: 7000,
      complete: function() {
        let obj3 = document.querySelector('#VoteCount');
        obj3.innerHTML = "Vote Count: 3";

        anime({
          targets: '#Page25Signal2',
          opacity: 1,
          translateX: [-73, 127],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animetion3 = anime.timeline().add({
      targets: '#Page25Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3500,
    }).add({
      targets: '#Page25Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page25Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3500,
    }).add({
      targets: '#Page25Text3',
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
        <div className="Page25NodeDes" id="Page25NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page25NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page25VoteCount1"> Voted For: A</div>
        </div>
        <div className="Page25Node" id="Page25Node1">
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

        <div className="Page25NodeDes" id="Page25NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page25NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page25VoteCount2"> Vote Count: 1</div>
        </div>

        <div className="Page25Node" id="Page25Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page25ProgressBarBG"
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
                id="Page25ProgressBarIT"
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

        <div className="Page25NodeDes" id="Page25NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page25NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page25VoteCount3"> Voted For: A</div>
        </div>

        <div className="Page25Node" id="Page25Node3">
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
        <div className="Page25Signal" id="Page25Signal1"/>
        <div className="Page25Signal" id="Page25Signal2"/>
        <div className="Page25Text" id="Page25Text1"> If the receiving node hasn't voted yet in this term then it votes for the candidate...</div>
        <div className="Page25Text" id="Page25Text2"> ...and the node resets its election timeout.</div>
        <div className="Page25Text" id="Page25Text3"> Once a candidate has a majority of votes it becomes leader.</div>
      </div>
  );
}

export default Page25;