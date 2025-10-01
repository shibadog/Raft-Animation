import '../css/page37.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page37(props){
  let obj = document.querySelector('#Page37Log2');
  if(obj !== null) obj.style.display = 'none';

  const progressBarRefs = useRef([]);
  const animationsRef = useRef(null);
  anime({
    targets: ['#Page37HeartBeat1', '#Page37HeartBeat2'],
    opacity: 1,
    translateX: 77,
    translateY: 129,
    easing: "linear",
    duration: 0,
  });

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
      loop: false,
    }).add({
        targets: '#Page37HeartBeatResponse1',
        opacity: 1,
        translateX: 178,
        translateY: -72,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page37HeartBeatResponse1',
        translateX: 77,
        translateY: 129,
        easing: "linear",
        duration: 1500,
        complete: function () {
          anime({
            targets: '#Page37HeartBeatResponse1',
            opacity: 1,
            translateX: 178,
            translateY: -72,
            easing: "linear",
            duration: 0,
          });
        }
      }).add({
        targets: '#Page37HeartBeat1',
        opacity: 1,
        translateX: 77,
        translateY: 129,
        easing: "linear",
        duration: 0,
      }).add({
        targets: '#Page37HeartBeat1',
        translateX: 127.5,
        translateY: 28.5,
        easing: "linear",
        duration: 1500,
      });

    let animation2 = anime.timeline({
      loop: false,
    }).add({
      targets: '#Page37HeartBeatResponse2',
      opacity: 1,
      translateX: 277,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page37HeartBeatResponse2',
      translateX: 77,
      easing: "linear",
      duration: 1500,
      complete: function () {
        anime({
          targets: '#Page37HeartBeatResponse2',
          opacity: 1,
          translateX: 277,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page37HeartBeat2',
      opacity: 1,
      translateX: 77,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page37HeartBeat2',
      translateX: 178.5,
      easing: "linear",
      duration: 1500,
    });

  let animation3 = anime.timeline().add({
      targets: '#Page37Request1',
      opacity: 1,
      translateX: -123,
      translateY: 27,
      easing: "linear",
      duration: 0,
      delay: 1500,
    }).add({
      targets: '#Page37Request1',
      translateX: 77,
      translateY: 127,
      easing: "linear",
      duration: 1500,
      complete: function() {
        let obj1 = document.querySelector('#Page37Log2');
        obj1.style.display = '';
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
        <div className="Page37NodeDes" id="Page37NodeDes1">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent" id="Page37NodeTerm1"> 任期: 1</div>
          <div className="NodeDesContent" id="Page37VoteCount1"> Leader: A</div>
        </div>
        
        <table className="Page37Log" id="Page37Log1">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page37Log1Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page37Node" id="Page37Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page37ProgressBarBG1"
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
                id="Page37ProgressBarIT1"
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

        <div className="Page37NodeDes" id="Page37NodeDes2">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent" id="Page37NodeTerm2"> 任期: 1</div>
          <div className="NodeDesContent" id="Page37VoteCount2"> Vote Count: 3</div>
        </div>

        <table className="Page37Log" id="Page37Log2">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page37Log2Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page37Node" id="Page37Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page37ProgressBarBG2"
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
                id="Page37ProgressBarIT2"
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
        
        

        <div className="Page37NodeDes" id="Page37NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent" id="Page37NodeTerm3"> 任期: 1</div>
          <div className="NodeDesContent" id="Page37VoteCount3"> Leader: A</div>
        </div>

        <table className="Page37Log" id="Page37Log3">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page37Log3Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page37Node" id="Page37Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page37ProgressBarBG3"
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
                id="Page37ProgressBarIT3"
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
        <div className="Page37HeartBeat" id="Page37HeartBeat1"/>
        <div className="Page37HeartBeat" id="Page37HeartBeat2"/>
        <div className="Page37HeartBeatResponse" id="Page37HeartBeatResponse1"/>
        <div className="Page37HeartBeatResponse" id="Page37HeartBeatResponse2"/>
        <div className="Page37Client" id="Page37Client1"> 5 </div>
        <div className="Page37Request" id="Page37Request1"/>
        <div className="Page37Text" id="Page37Text1"> 変更はリーダーのログに追加されます...</div>
      </div>
  );
}

export default Page37;