import '../css/page30.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page30(props){
  let obj1 = document.querySelector('#Page30Node3');
  if(obj1 !== null) obj1.style.borderStyle = 'none';
  let obj2 = document.querySelector('#Page30Node4');
  if(obj2 !== null) obj2.style.borderStyle = 'none';

  let obj3 = document.querySelector('#Page30NodeTerm3');
  if(obj3 !== null) obj3.innerHTML = 'Term: 0';
  let obj4 = document.querySelector('#Page30NodeTerm4');
  if(obj4 !== null) obj4.innerHTML = 'Term: 0';

  let obj5 = document.querySelector('#Page30VoteCount3');
  if(obj5 !== null) obj5.innerHTML = 'Vote Count: 0';
  let obj6 = document.querySelector('#Page30VoteCount4');
  if(obj6 !== null) obj6.innerHTML = 'Vote Count: 0';

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
            let obj1 = document.querySelector('#Page30Node3');
            if(obj1 !== null) obj1.style.borderStyle = 'dotted';
            let obj2 = document.querySelector('#Page30Node4');
            if(obj2 !== null) obj2.style.borderStyle = 'dotted';

            let obj3 = document.querySelector('#Page30NodeTerm3');
            if(obj3 !== null) obj3.innerHTML = 'Term: 1';
            let obj4 = document.querySelector('#Page30NodeTerm4');
            if(obj4 !== null) obj4.innerHTML = 'Term: 1';

            let obj5 = document.querySelector('#Page30VoteCount3');
            if(obj5 !== null) obj5.innerHTML = 'Vote Count: 1';
            let obj6 = document.querySelector('#Page30VoteCount4');
            if(obj6 !== null) obj6.innerHTML = 'Vote Count: 1';
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
        return ['1 251.2', '220 251.2'];
      case 1:
        return ['1 251.2', '160 251.2'];
      case 2:
        return ['1 251.2', '251.2 251.2'];
      case 3:
        return ['1 251.2', '251.2 251.2'];
      default:
        return [];
    }
  };

  useEffect(() => {
    if (props.display) {
      animationsRef.current.forEach((animation) => {
        animation.restart();
      });
    }
  }, [props.display]);

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page30NodeDes" id="Page30NodeDes1">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
          <div className="NodeDesContent" id="Page30VoteCount1"> Vote Count: 0</div>
        </div>
        <div className="Page30Node" id="Page30Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page30ProgressBarBG1"
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
                id="Page30ProgressBarIT1"
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

        <div className="Page30NodeDes" id="Page30NodeDes2">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page30NodeTerm2"> Term: 0</div>
          <div className="NodeDesContent" id="Page30VoteCount2"> Vote Count: 0</div>
        </div>

        <div className="Page30Node" id="Page30Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page30ProgressBarBG2"
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
                id="Page30ProgressBarIT2"
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

        <div className="Page30NodeDes" id="Page30NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page30NodeTerm3"> Term: 0</div>
          <div className="NodeDesContent" id="Page30VoteCount3"> Vote Count: 0</div>
        </div>

        <div className="Page30Node" id="Page30Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page30ProgressBarBG3"
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
                id="Page30ProgressBarIT3"
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

        <div className="Page30NodeDes" id="Page30NodeDes4">
          <div className="NodeDesContent"> Node d</div>
          <div className="NodeDesContent" id="Page30NodeTerm4"> Term: 0</div>
          <div className="NodeDesContent" id="Page30VoteCount4"> Vote Count: 0</div>
        </div>

        <div className="Page30Node" id="Page30Node4">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page30ProgressBarBG4"
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
                id="Page30ProgressBarIT4"
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

        <div className="Page30Text" id="Page30Text1"> Two nodes both start an election for the same term... </div>
      </div>
  );
}

export default Page30;