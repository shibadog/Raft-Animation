import '../css/page200.css';
import React, { useEffect, useRef } from 'react';
import anime from "animejs";

function Page200(props) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    const initialProgress = 0; // 初始进度
    const finalProgress = 62.8; // 最终进度

    const animation = anime({
      targets: progressBar,
      strokeDasharray: [`${initialProgress} 251.2`, `${finalProgress} 251.2`], // 进度动画
      easing: 'linear',
      duration: 2000,
      autoplay: true,
    });

    return () => {
      animation.pause(); // 在组件卸载时停止动画
    };
  }, []);

  return (
      <div style={{display: props.display?'': 'none'}}>
        <svg className="progress-bar" viewBox="0 0 100 100">
          <circle
              className="progress-bar-background"
              cx="50"
              cy="50"
              r="10"
              stroke="#ddd"
              strokeWidth="5"
              fill="transparent"
          />
          <circle
              ref={progressBarRef}
              className="progress-bar-indicator"
              cx="50"
              cy="50"
              r="10"
              stroke="#ff0000"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray="0 251.2"
              strokeDashoffset="0"
          />
        </svg>
      </div>
  );
}

export default Page200;

const animationsRef = useRef([]);
const progressBars = progressBarRefs.current;
////////////////////////////////////////////////////////// candidate timeout ////////////////////////////////////
const animations1 = progressBars.map((progressBar, index) =>
    anime({
      targets: progressBar,
      strokeDasharray: getStrokeDashArray(index), // 进度动画
      easing: 'linear',
      duration: 3000,
      loop: true,
      direction: "normal",
      autoplay: true,
      complete: function() {
        let obj1 = document.querySelector('#Page29Node1');
        if(obj1 !== null) obj1.style.borderStyle = 'dotted';
        let obj2 = document.querySelector('#Page29NodeTerm1');
        if(obj2 !== null) obj2.innerHTML = '任期: 2';
        let obj3 = document.querySelector('#Page29VoteCount1');
        if(obj3 !== null) obj3.innerHTML = '投票数: 1';
        requestAndResponse.play();
      }
    })
);

const animations2 = progressBars.map((progressBar, index) =>
    anime({
      targets: progressBar,
      strokeDasharray: getStrokeDashArray(index), // 进度动画
      easing: 'linear',
      duration: 2000,
      loop: true,
      direction: "normal",
      autoplay: true,
      complete: function() {
        let obj1 = document.querySelector('#Page29Node1');
        if(obj1 !== null) obj1.style.borderStyle = 'dotted';
        let obj2 = document.querySelector('#Page29NodeTerm1');
        if(obj2 !== null) obj2.innerHTML = '任期: 2';
        let obj3 = document.querySelector('#Page29VoteCount1');
        if(obj3 !== null) obj3.innerHTML = '投票数: 1';
        requestAndResponse.play();
      }
    })
);

animationsRef.current.push([animations1, animations2]);

useEffect(() => {
  if (props.display) {
    animation();
    animationsRef.current.forEach((animations) => {
      animations.forEach((animation) => {
        animation.restart();
      });
    });
  }
}, [props.display]);