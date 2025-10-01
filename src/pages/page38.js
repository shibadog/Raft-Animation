import '../css/page38.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page38(props){

  const progressBarRefs = useRef([]);
  const animationsRef = useRef(null);

  useEffect(() => {
    const progressBars = progressBarRefs.current;

    const animations = progressBars.map((progressBar, index) =>
        anime.timeline({
          loop: false,
          autoplay: true,
        }).add({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index), // 进度动画
          easing: 'linear',
          duration: 1500,
          direction: "normal",
          complete: function(){
            anime({
              targets: progressBar,
              strokeDasharray: '1 251.2', // 进度动画
              easing: 'linear',
              duration: 0,
              direction: "normal",
            })
          }
        }).add({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index+3), // 进度动画
          easing: 'linear',
          duration: 2000,
          direction: "normal",
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
        return ['65 251.2', '95 251.2'];
      case 1:
        return ['1 251.2', '65 251.2'];
      case 2:
        return ['65 251.2', '95 251.2'];
      case 3:
        return ['1 251.2', '50 251.2'];
      case 4:
        return ['1 251.2', '65 251.2'];
      case 5:
        return ['1 251.2', '50 251.2'];
      default:
        return [];
    }
  };

  function animation() {

    let animation1 = anime.timeline({
      loop: false,
    }).add({
        targets: '#Page38HeartBeat1',
        opacity: 1,
        translateX: [127.5, 178],
        translateY: [28.5, -72],
        easing: "linear",
        duration: 1500,
        complete: function(){
            anime({
              targets: '#Page38HeartBeat1',
              opacity: 1,
              translateX: [178, 77],
              translateY: [-72, 129],
              easing: "linear",
              duration: 0,
            });
        }
      }).add({
        targets: '#Page38HeartBeatResponse1',
        opacity: 1,
        translateX: 178,
        translateY: -72,
        easing: "linear",
        duration: 0,
    }).add({
        targets: '#Page38HeartBeatResponse1',
        opacity: 1,
        translateX: 77,
        translateY: 129,
        easing: "linear",
        duration: 1500,
      complete: function () {
        anime({
          targets: '#Page38HeartBeatResponse1',
          opacity: 1,
          translateX: 178,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page38HeartBeat1',
      opacity: 1,
      translateX: [77, 102.25],
      translateY: [129, 78.75],
      easing: "linear",
      duration: 500,
    });

    let animation2 = anime.timeline({
      loop: false,
    }).add({
      targets: '#Page38HeartBeat2',
      translateX: [178.5, 280],
      translateY: [129, 129],
      easing: "linear",
      duration: 1500,
      complete: function(){
        anime({
          targets: '#Page38HeartBeat2',
          opacity: 1,
          translateX: [280, 77],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page38HeartBeatResponse2',
      opacity: 1,
      translateX: 277,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page38HeartBeatResponse2',
      translateX: 77,
      easing: "linear",
      duration: 1500,
      complete: function () {
        anime({
          targets: '#Page38HeartBeatResponse2',
          opacity: 1,
          translateX: 277,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page38HeartBeat2',
      opacity: 1,
      translateX: [77, 127.75],
      translateY: [129, 129],
      easing: "linear",
      duration: 500,
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
        <div className="Page38NodeDes" id="Page38NodeDes1">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent" id="Page38NodeTerm1"> 任期: 1</div>
          <div className="NodeDesContent" id="Page38VoteCount1"> Leader: A</div>
        </div>
        
        <table className="Page38Log" id="Page38Log1">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page38Log1Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page38Node" id="Page38Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page38ProgressBarBG1"
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
                id="Page38ProgressBarIT1"
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

        <div className="Page38NodeDes" id="Page38NodeDes2">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent" id="Page38NodeTerm2"> 任期: 1</div>
          <div className="NodeDesContent" id="Page38VoteCount2"> Vote Count: 3</div>
        </div>

        <table className="Page38Log" id="Page38Log2">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page38Log2Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page38Node" id="Page38Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page38ProgressBarBG2"
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
                id="Page38ProgressBarIT2"
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
        
        

        <div className="Page38NodeDes" id="Page38NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent" id="Page38NodeTerm3"> 任期: 1</div>
          <div className="NodeDesContent" id="Page38VoteCount3"> Leader: A</div>
        </div>

        <table className="Page38Log" id="Page38Log3">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page38Log3Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page38Node" id="Page38Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page38ProgressBarBG3"
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
                id="Page38ProgressBarIT3"
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
        <div className="Page38HeartBeat" id="Page38HeartBeat1"/>
        <div className="Page38HeartBeat" id="Page38HeartBeat2"/>
        <div className="Page38HeartBeatResponse" id="Page38HeartBeatResponse1"/>
        <div className="Page38HeartBeatResponse" id="Page38HeartBeatResponse2"/>
        <div className="Page38Client" id="Page38Client1"> 5 </div>
        <div className="Page38Text" id="Page38Text1"> ...その後、次のハートビートで変更がフォロワーに送信されます。</div>
      </div>
  );
}

export default Page38;