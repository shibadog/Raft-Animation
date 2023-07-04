import '../css/page31.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page31(props){

  let obj3 = document.querySelector('#Page31NodeTerm1');
  if(obj3 !== null) obj3.innerHTML = 'Term: 0';
  let obj4 = document.querySelector('#Page31NodeTerm2');
  if(obj4 !== null) obj4.innerHTML = 'Term: 0';

  let obj5 = document.querySelector('#Page31VoteCount1');
  if(obj5 !== null) obj5.innerHTML = 'Vote Count: 0';
  let obj6 = document.querySelector('#Page31VoteCount2');
  if(obj6 !== null) obj6.innerHTML = 'Vote Count: 0';

  anime({
    targets: '#Page31Request3',
    opacity: 0,
    translateX: -70,
    translateY: 125,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page31Request4',
    opacity: 0,
    translateX: 125,
    translateY: 125,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page31Request5',
    opacity: 0,
    translateX: -70,
    translateY: 125,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page31Request6',
    opacity: 0,
    translateX: 125,
    translateY: 125,
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
        return ['220 251.2', '240 251.2'];
      case 1:
        return ['160 251.2', '200 251.2'];
      case 2:
        return ['1 251.2', '90 251.2'];
      case 3:
        return ['1 251.2', '50 251.2'];
      default:
        return [];
    }
  };

  function animation() {
    let animation1 = anime.timeline().add({
      targets: '#Page31Request1',
      opacity: 1,
      translateX: -70,
      translateY: 125,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page31Request1',
      translateX: 125,
      translateY: 125,
      easing: "linear",
      duration: 3000,
      complete: function () {
        anime({
          targets: '#Page31Request1',
          opacity: 0,
          translateX: -70,
          translateY: 125,
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page31Request2',
      opacity: 1,
      translateX: 125,
      translateY: 125,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page31Request2',
      translateX: -70,
      translateY: 125,
      easing: "linear",
      duration: 3000,
      complete: function() {
        anime({
          targets: '#Page31Request2',
          opacity: 0,
          translateX: 125,
          translateY: 125,
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation3 = anime.timeline().add({
      targets: '#Page31Request3',
      opacity: 1,
      translateX: -70,
      translateY: 125,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page31Request3',
      translateX: 60,
      translateY: -8.4,
      easing: "linear",
      duration: 3000,
    });

    let animation4 = anime.timeline().add({
      targets: '#Page31Request4',
      opacity: 1,
      translateX: 125,
      translateY: 125,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page31Request4',
      translateX: -5,
      translateY: -8.4,
      easing: "linear",
      duration: 3000,
    });

    let animation5 = anime.timeline().add({
      targets: '#Page31Request5',
      opacity: 1,
      translateX: -70,
      translateY: 125,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page31Request5',
      translateX: -70,
      translateY: -30,
      easing: "linear",
      duration: 3000,
      complete: function() {
        let obj3 = document.querySelector('#Page31NodeTerm1');
        if(obj3 !== null) obj3.innerHTML = 'Term: 1';

        let obj5 = document.querySelector('#Page31VoteCount1');
        if(obj5 !== null) obj5.innerHTML = 'Voted For: C';

        anime({
          targets: '#Page31ProgressBarIT1',
          strokeDasharray: '1 251.2', // 进度动画
          easing: 'linear',
          duration: 0,
          loop: false,
          direction: "normal",
          autoplay: true,
        });
      }
    });

    let animation6 = anime.timeline().add({
      targets: '#Page31Request6',
      opacity: 1,
      translateX: 125,
      translateY: 125,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page31Request6',
      translateX: 125,
      translateY: -30,
      easing: "linear",
      duration: 3000,
      complete: function() {
        let obj4 = document.querySelector('#Page31NodeTerm2');
        if(obj4 !== null) obj4.innerHTML = 'Term: 1';

        let obj6 = document.querySelector('#Page31VoteCount2');
        if(obj6 !== null) obj6.innerHTML = 'Voted For: D';

        anime({
          targets: '#Page31ProgressBarIT2',
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
        <div className="Page31NodeDes" id="Page31NodeDes1">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page31NodeTerm1"> Term: 0</div>
          <div className="NodeDesContent" id="Page31VoteCount1"> Vote Count: 0</div>
        </div>
        <div className="Page31Node" id="Page31Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page31ProgressBarBG1"
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
                id="Page31ProgressBarIT1"
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

        <div className="Page31NodeDes" id="Page31NodeDes2">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page31NodeTerm2"> Term: 0</div>
          <div className="NodeDesContent" id="Page31VoteCount2"> Vote Count: 0</div>
        </div>

        <div className="Page31Node" id="Page31Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page31ProgressBarBG2"
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
                id="Page31ProgressBarIT2"
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

        <div className="Page31NodeDes" id="Page31NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page31NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page31VoteCount3"> Vote Count: 1</div>
        </div>

        <div className="Page31Node" id="Page31Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page31ProgressBarBG3"
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
                id="Page31ProgressBarIT3"
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

        <div className="Page31NodeDes" id="Page31NodeDes4">
          <div className="NodeDesContent"> Node d</div>
          <div className="NodeDesContent" id="Page31NodeTerm4"> Term: 1</div>
          <div className="NodeDesContent" id="Page31VoteCount4"> Vote Count: 1</div>
        </div>

        <div className="Page31Node" id="Page31Node4">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page31ProgressBarBG4"
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
                id="Page31ProgressBarIT4"
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
        <div className="Page31Request" id="Page31Request1"/>
        <div className="Page31Request" id="Page31Request2"/>
        <div className="Page31Request" id="Page31Request3"/>
        <div className="Page31Request" id="Page31Request4"/>
        <div className="Page31Request" id="Page31Request5"/>
        <div className="Page31Request" id="Page31Request6"/>
        <div className="Page31Text" id="Page31Text1"> ...and each reaches a single follower node before the other. </div>
      </div>
  );
}

export default Page31;