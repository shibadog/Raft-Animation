import '../css/page36.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page36(props){
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
          loop: true,
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
        return ['1 251.2', '65 251.2'];
      case 1:
        return ['1 251.2', '65 251.2'];
      case 2:
        return ['1 251.2', '65 251.2'];
      default:
        return [];
    }
  };

  function animation() {

    let animation1 = anime.timeline({
      loop: true,
    }).add({
        targets: '#Page36Signal1',
        opacity: 1,
        translateX: 178,
        translateY: -72,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page36Signal1',
        translateX: 77,
        translateY: 129,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page36Signal1',
            opacity: 1,
            translateX: 178,
            translateY: -72,
            easing: "linear",
            duration: 0,
          });
        }
      }).add({
        targets: '#Page36Request1',
        opacity: 1,
        translateX: 77,
        translateY: 129,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page36Request1',
        translateX: 178,
        translateY: -72,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page36Request1',
            opacity: 1,
            translateX: 77,
            translateY: 129,
            easing: "linear",
            duration: 0,
          });
        }
      });

    let animation2 = anime.timeline({
      loop: true,
    }).add({
      targets: '#Page36Signal2',
      opacity: 1,
      translateX: 277,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page36Signal2',
      translateX: 77,
      easing: "linear",
      duration: 1500,
      complete: function () {
        anime({
          targets: '#Page36Signal2',
          opacity: 1,
          translateX: 277,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page36Request2',
      opacity: 1,
      translateX: 77,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page36Request2',
      translateX: 280,
      easing: "linear",
      duration: 1500,
      complete: function() {
        anime({
          targets: '#Page36Request2',
          opacity: 1,
          translateX: 77,
          translateY: 129,
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
        <div className="Page36NodeDes" id="Page36NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page36NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page36VoteCount1"> Leader: A</div>
        </div>
        <div className="Page36Node" id="Page36Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page36ProgressBarBG1"
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
                id="Page36ProgressBarIT1"
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

        <div className="Page36NodeDes" id="Page36NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page36NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page36VoteCount2"> Vote Count: 3</div>
        </div>

        <div className="Page36Node" id="Page36Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page36ProgressBarBG2"
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
                id="Page36ProgressBarIT2"
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

        <div className="Page36NodeDes" id="Page36NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page36NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page36VoteCount3"> Leader: A</div>
        </div>

        <div className="Page36Node" id="Page36Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page36ProgressBarBG3"
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
                id="Page36ProgressBarIT3"
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
        <div className="Page36Request" id="Page36Request1"/>
        <div className="Page36Request" id="Page36Request2"/>
        <div className="Page36Signal" id="Page36Signal1"/>
        <div className="Page36Signal" id="Page36Signal2"/>
        <div className="Page36Client" id="Page36Client1"> 5 </div>
        <div className="Page36Text" id="Page36Text1"> First a client sends a change to the leader.</div>
      </div>
  );
}

export default Page36;