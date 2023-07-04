import '../css/page35.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page35(props){
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
        targets: '#Page35Signal1',
        opacity: 1,
        translateX: 28,
        translateY: -72,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page35Signal1',
        translateX: -73,
        translateY: 129,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page35Signal1',
            opacity: 1,
            translateX: 28,
            translateY: -72,
            easing: "linear",
            duration: 0,
          });
        }
      }).add({
        targets: '#Page35Request1',
        opacity: 1,
        translateX: -73,
        translateY: 129,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page35Request1',
        translateX: 28,
        translateY: -72,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page35Request1',
            opacity: 1,
            translateX: -73,
            translateY: 129,
            easing: "linear",
            duration: 0,
          });
        }
      });

    let animation2 = anime.timeline({
      loop: true,
    }).add({
      targets: '#Page35Signal2',
      opacity: 1,
      translateX: 127,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page35Signal2',
      translateX: -73,
      easing: "linear",
      duration: 1500,
      complete: function () {
        anime({
          targets: '#Page35Signal2',
          opacity: 1,
          translateX: 127,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page35Request2',
      opacity: 1,
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page35Request2',
      translateX: 130,
      easing: "linear",
      duration: 1500,
      complete: function() {
        anime({
          targets: '#Page35Request2',
          opacity: 1,
          translateX: -73,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    });
    
    let animation3 = anime.timeline().add({
      targets: '#Page35Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 4500,
    }).add({
      targets: '#Page35Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page35Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 4000,
    }).add({
      targets: '#Page35Text3',
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
        <div className="Page35NodeDes" id="Page35NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page35NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page35VoteCount1"> Leader: A</div>
        </div>
        <div className="Page35Node" id="Page35Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page35ProgressBarBG1"
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
                id="Page35ProgressBarIT1"
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

        <div className="Page35NodeDes" id="Page35NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page35NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page35VoteCount2"> Vote Count: 3</div>
        </div>

        <div className="Page35Node" id="Page35Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page35ProgressBarBG2"
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
                id="Page35ProgressBarIT2"
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

        <div className="Page35NodeDes" id="Page35NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page35NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page35VoteCount3"> Leader: A</div>
        </div>

        <div className="Page35Node" id="Page35Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page35ProgressBarBG3"
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
                id="Page35ProgressBarIT3"
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
        <div className="Page35Request" id="Page35Request1"/>
        <div className="Page35Request" id="Page35Request2"/>
        <div className="Page35Signal" id="Page35Signal1"/>
        <div className="Page35Signal" id="Page35Signal2"/>
        <div className="Page35Text" id="Page35Text1"> Once we have a leader elected we need to replicate all changes to our system to all nodes.</div>
        <div className="Page35Text" id="Page35Text2"> This is done by using the same Append Entries message that was used for heartbeats.</div>
        <div className="Page35Text" id="Page35Text3"> Let's walk through the process.</div>
      </div>
  );
}

export default Page35;