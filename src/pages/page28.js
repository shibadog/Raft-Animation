import '../css/page28.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page28(props){
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
        targets: '#Page28Signal1',
        opacity: 1,
        translateX: 28,
        translateY: -72,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page28Signal1',
        translateX: -73,
        translateY: 129,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page28Signal1',
            opacity: 1,
            translateX: 28,
            translateY: -72,
            easing: "linear",
            duration: 0,
          });
        }
      }).add({
        targets: '#Page28Request1',
        opacity: 1,
        translateX: -73,
        translateY: 129,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page28Request1',
        translateX: 28,
        translateY: -72,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page28Request1',
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
      targets: '#Page28Signal2',
      opacity: 1,
      translateX: 127,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page28Signal2',
      translateX: -73,
      easing: "linear",
      duration: 1500,
      complete: function () {
        anime({
          targets: '#Page28Signal2',
          opacity: 1,
          translateX: 127,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page28Request2',
      opacity: 1,
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page28Request2',
      translateX: 130,
      easing: "linear",
      duration: 1500,
      complete: function() {
        anime({
          targets: '#Page28Request2',
          opacity: 1,
          translateX: -73,
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
        <div className="Page28NodeDes" id="Page28NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page28NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page28VoteCount1"> Leader: A</div>
        </div>
        <div className="Page28Node" id="Page28Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page28ProgressBarBG1"
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
                id="Page28ProgressBarIT1"
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

        <div className="Page28NodeDes" id="Page28NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page28NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page28VoteCount2"> Vote Count: 3</div>
        </div>

        <div className="Page28Node" id="Page28Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page28ProgressBarBG2"
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
                id="Page28ProgressBarIT2"
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

        <div className="Page28NodeDes" id="Page28NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page28NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page28VoteCount3"> Leader: A</div>
        </div>

        <div className="Page28Node" id="Page28Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page28ProgressBarBG3"
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
                id="Page28ProgressBarIT3"
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
        <div className="Page28Request" id="Page28Request1"/>
        <div className="Page28Request" id="Page28Request2"/>
        <div className="Page28Signal" id="Page28Signal1"/>
        <div className="Page28Signal" id="Page28Signal2"/>
        <div className="Page28Text" id="Page28Text1"> Let's stop the leader and watch a re-election happen.</div>
      </div>
  );
}

export default Page28;