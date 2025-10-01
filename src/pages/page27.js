import '../css/page27.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page27(props){
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
        targets: '#Page27Signal1',
        opacity: 1,
        translateX: 28,
        translateY: -72,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page27Signal1',
        translateX: -73,
        translateY: 129,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page27Signal1',
            opacity: 1,
            translateX: 28,
            translateY: -72,
            easing: "linear",
            duration: 0,
          });
        }
      }).add({
        targets: '#Page27Request1',
        opacity: 1,
        translateX: -73,
        translateY: 129,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page27Request1',
        translateX: 28,
        translateY: -72,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page27Request1',
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
      targets: '#Page27Signal2',
      opacity: 1,
      translateX: 127,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page27Signal2',
      translateX: -73,
      easing: "linear",
      duration: 1500,
      complete: function () {
        anime({
          targets: '#Page27Signal2',
          opacity: 1,
          translateX: 127,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page27Request2',
      opacity: 1,
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page27Request2',
      translateX: 130,
      easing: "linear",
      duration: 1500,
      complete: function() {
        anime({
          targets: '#Page27Request2',
          opacity: 1,
          translateX: -73,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    });


    let animetion3 = anime.timeline().add({
      targets: '#Page27Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3500,
    }).add({
      targets: '#Page27Text2',
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
        <div className="Page27NodeDes" id="Page27NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page27NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page27VoteCount1"> リーダー: A</div>
        </div>
        <div className="Page27Node" id="Page27Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page27ProgressBarBG1"
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
                id="Page27ProgressBarIT1"
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

        <div className="Page27NodeDes" id="Page27NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page27NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page27VoteCount2"> Vote Count: 3</div>
        </div>

        <div className="Page27Node" id="Page27Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page27ProgressBarBG2"
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
                id="Page27ProgressBarIT2"
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

        <div className="Page27NodeDes" id="Page27NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page27NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page27VoteCount3"> リーダー: A</div>
        </div>

        <div className="Page27Node" id="Page27Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page27ProgressBarBG3"
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
                id="Page27ProgressBarIT3"
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
        <div className="Page27Request" id="Page27Request1"/>
        <div className="Page27Request" id="Page27Request2"/>
        <div className="Page27Signal" id="Page27Signal1"/>
        <div className="Page27Signal" id="Page27Signal2"/>
        <div className="Page27Text" id="Page27Text1"> フォロワーは各<span id="Focus">エントリ追加</span>メッセージに応答します。</div>
        <div className="Page27Text" id="Page27Text2"> この選出任期は、フォロワーがハートビートの受信を停止して候補者になるまで続きます。</div>
      </div>
  );
}

export default Page27;