import '../css/page32.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page32(props){

  let obj5 = document.querySelector('#Page32VoteCount3');
  if(obj5 !== null) obj5.innerHTML = 'Vote Count: 1';
  let obj6 = document.querySelector('#Page32VoteCount4');
  if(obj6 !== null) obj6.innerHTML = 'Vote Count: 1';

  anime({
    targets: '#Page32Signal1',
    opacity: 0,
    translateX: -70,
    translateY: -75,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page32Signal2',
    opacity: 0,
    translateX: 125,
    translateY: -75,
    easing: "linear",
    duration: 0,
  });

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
          loop: false,
          direction: "normal",
          autoplay: true,
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
        return ['1 251.2', '20 251.2'];
      case 1:
        return ['1 251.2', '40 251.2'];
      case 2:
        return ['90 251.2', '180 251.2'];
      case 3:
        return ['50 251.2', '100 251.2'];
      default:
        return [];
    }
  };

  function animation() {
    let animation1 = anime.timeline().add({
      targets: '#Page32Signal1',
      opacity: 1,
      translateX: -70,
      translateY: -75,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page32Signal1',
      translateX: -70,
      translateY: 90,
      easing: "linear",
      duration: 3000,
      complete: function () {
        let obj6 = document.querySelector('#Page32VoteCount3');
        if(obj6 !== null) obj6.innerHTML = 'Vote Count: 2';

        anime({
          targets: '#Page32ProgressBarIT3',
          strokeDasharray: '1 251.2', // 进度动画
          easing: 'linear',
          duration: 0,
          loop: false,
          direction: "normal",
          autoplay: true,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page32Signal2',
      opacity: 1,
      translateX: 125,
      translateY: -75,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page32Signal2',
      translateX: 125,
      translateY: 90,
      easing: "linear",
      duration: 3000,
      complete: function () {
        let obj6 = document.querySelector('#Page32VoteCount4');
        if(obj6 !== null) obj6.innerHTML = 'Vote Count: 2';

        anime({
          targets: '#Page32ProgressBarIT4',
          strokeDasharray: '1 251.2', // 进度动画
          easing: 'linear',
          duration: 0,
          loop: false,
          direction: "normal",
          autoplay: true,
        });
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
        <div className="Page32NodeDes" id="Page32NodeDes1">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page32NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page32VoteCount1"> 投票先: C</div>
        </div>
        <div className="Page32Node" id="Page32Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page32ProgressBarBG1"
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
                id="Page32ProgressBarIT1"
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

        <div className="Page32NodeDes" id="Page32NodeDes2">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page32NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page32VoteCount2"> 投票先: D</div>
        </div>

        <div className="Page32Node" id="Page32Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page32ProgressBarBG2"
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
                id="Page32ProgressBarIT2"
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

        <div className="Page32NodeDes" id="Page32NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page32NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page32VoteCount3"> Vote Count: 1</div>
        </div>

        <div className="Page32Node" id="Page32Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page32ProgressBarBG3"
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
                id="Page32ProgressBarIT3"
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

        <div className="Page32NodeDes" id="Page32NodeDes4">
          <div className="NodeDesContent"> Node d</div>
          <div className="NodeDesContent" id="Page32NodeTerm4"> Term: 1</div>
          <div className="NodeDesContent" id="Page32VoteCount4"> Vote Count: 1</div>
        </div>

        <div className="Page32Node" id="Page32Node4">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page32ProgressBarBG4"
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
                id="Page32ProgressBarIT4"
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
        <div className="Page32Signal" id="Page32Signal1"/>
        <div className="Page32Signal" id="Page32Signal2"/>
        <div className="Page32Text" id="Page32Text1"> 現在、各候補者は2票を持っており、この任期ではこれ以上の投票を受け取ることはできません。 </div>
      </div>
  );
}

export default Page32;