import '../css/page26.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page26(props){
  let obj = document.querySelector('#Page26VoteCount1');
  if(obj !== null) obj.innerHTML = 'Voted For: A';
  let obj1 = document.querySelector('#Page26VoteCount3');
  if(obj1 !== null) obj1.innerHTML = 'Voted For: A';

  let objs = document.getElementsByClassName('Page26Request');
  [].forEach.call(objs, element => element.style.display = '');

  anime({
    targets: '#Page26NodeDes1',
    duration: 0,
    translateX: -12,
    translateY: -170,
    easing: 'linear',
  });

  anime({
    targets: '#Page26NodeDes3',
    duration: 0,
    translateX: 84,
    translateY: 180,
    easing: 'linear',
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
          duration: 2200,
          loop: false,
          direction: "normal",
          autoplay: true,
          delay: 9000,
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
        return ['25 251.2', '50 251.2'];
      case 1:
        return ['40 251.2', '65 251.2'];
      case 2:
        return ['25 251.2', '50 251.2'];
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
      targets: '#Page26Request1',
      opacity: 1,
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page26Request1',
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 2500,
      delay: 9000,
      complete: function () {
        let obj1 = document.querySelector('#Page26Request1');
        obj1.style.display = 'none';
        let obj3 = document.querySelector('#Page26VoteCount1');
        if(obj3 !== null) obj3.innerHTML = 'Leader: A';

        anime({
          targets: '#Page26Request1',
          opacity: 0,
          translateX: -73,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page26ProgressBarIT1',
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
      targets: '#Page26Request2',
      opacity: 1,
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page26Request2',
      translateX: 130,
      easing: "linear",
      duration: 2500,
      delay: 9000,
      complete: function() {
        let obj1 = document.querySelector('#Page26Request2');
        obj1.style.display = 'none';
        let obj3 = document.querySelector('#Page26VoteCount3');
        if(obj3 !== null) obj3.innerHTML = "Leader: A";

        anime({
          targets: '#Page26NodeDes1',
          duration: 0,
          translateX: 0,
          translateY: -170,
          easing: 'linear',
        });

        anime({
          targets: '#Page26NodeDes3',
          duration: 0,
          translateX: 100,
          translateY: 180,
          easing: 'linear',
        });

        anime({
          targets: '#Page26Request2',
          opacity: 0,
          translateX: -73,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page26ProgressBarIT3',
          strokeDasharray: '1 251.2', // 进度动画
          easing: 'linear',
          duration: 0,
          loop: false,
          direction: "normal",
          autoplay: true,
        });
      }
    });

    let animetion3 = anime.timeline().add({
      targets: '#Page26Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3500,
    }).add({
      targets: '#Page26Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page26Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3500,
    }).add({
      targets: '#Page26Text3',
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
        <div className="Page26NodeDes" id="Page26NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page26NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page26VoteCount1"> Voted For: A</div>
        </div>
        <div className="Page26Node" id="Page26Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page26ProgressBarBG1"
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
                id="Page26ProgressBarIT1"
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

        <div className="Page26NodeDes" id="Page26NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page26NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page26VoteCount2"> Vote Count: 3</div>
        </div>

        <div className="Page26Node" id="Page26Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page26ProgressBarBG2"
                cx="50"
                cy="50"
                r="40"
                stroke="#ddd"
                strokeWidth="10"
                fill="transparent"
                display="none"
            />
            <circle
                ref={(el) => (progressBarRefs.current[1] = el)}
                className="progress-bar-indicator"
                id="Page26ProgressBarIT2"
                cx="50"
                cy="50"
                r="40"
                stroke="#ff0000"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="0 251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
                display="none"
            />
          </svg>
        </div>

        <div className="Page26NodeDes" id="Page26NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page26NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page26VoteCount3"> Voted For: A</div>
        </div>

        <div className="Page26Node" id="Page26Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page26ProgressBarBG3"
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
                id="Page26ProgressBarIT3"
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
        <div className="Page26Request" id="Page26Request1"/>
        <div className="Page26Request" id="Page26Request2"/>
        <div className="Page26Text" id="Page26Text1"> The leader begins sending out <span id="Focus"> Append Entries </span> messages to its followers.</div>
        <div className="Page26Text" id="Page26Text2"> These messages are sent in intervals specified by the <span id="Focus"> heartbeat timeout </span>.</div>
        <div className="Page26Text" id="Page26Text3"> The leader begins sending out Append Entries messages to its followers.</div>
      </div>
  );
}

export default Page26;