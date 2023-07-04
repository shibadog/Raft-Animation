import '../css/page39.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page39(props){
  let obj1 = document.querySelector('#Page39Log1');
  if(obj1 !== null) obj1.style.display = 'none';
  let obj2 = document.querySelector('#Page39Log3');
  if(obj2 !== null) obj2.style.display = 'none';
  let obj3 = document.getElementById('Page39Log2Text');
  if(obj3 != null) obj3.style.color = 'white';
  let obj4 = document.getElementById('Page39Node2Text');
  if(obj4 != null) obj4.style.display = 'none';

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
          duration: 1500,
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
        return ['50 251.2', '95 251.2'];
      case 1:
        return ['1 251.2', '65 251.2'];
      case 2:
        return ['50 251.2', '95 251.2'];
      case 3:
        return ['1 251.2', '65 251.2'];
      case 4:
        return ['1 251.2', '65 251.2'];
      case 5:
        return ['1 251.2', '65 251.2'];
      default:
        return [];
    }
  };

  function animation() {

    let animation1 = anime.timeline({
      loop: false,
    }).add({
        targets: '#Page39HeartBeat1',
        opacity: 1,
        translateX: [102.25, 178],
        translateY: [78.75, -72],
        easing: "linear",
        duration: 1500,
        complete: function(){
          let obj1 = document.querySelector('#Page39Log1');
          obj1.style.display = '';
            anime({
              targets: '#Page39HeartBeat1',
              opacity: 1,
              translateX: [178, 77],
              translateY: [-72, 129],
              easing: "linear",
              duration: 0,
            });
        }
      }).add({
        targets: '#Page39HeartBeatResponse1',
        opacity: 1,
        translateX: 178,
        translateY: -72,
        easing: "linear",
        duration: 0,
    }).add({
        targets: '#Page39HeartBeatResponse1',
        opacity: 1,
        translateX: 77,
        translateY: 129,
        easing: "linear",
        duration: 1500,
      complete: function () {
        let obj = document.getElementById('Page39Node2Text');
        if(obj != null) obj.style.display = '';
        anime({
          targets: '#Page39HeartBeatResponse1',
          opacity: 1,
          translateX: 178,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline({
      loop: false,
    }).add({
      targets: '#Page39HeartBeat2',
      translateX: [127.75, 280],
      translateY: [129, 129],
      easing: "linear",
      duration: 1500,
      complete: function(){
        let obj1 = document.querySelector('#Page39Log3');
        obj1.style.display = '';

        anime({
          targets: '#Page39HeartBeat2',
          opacity: 1,
          translateX: [280, 77],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page39HeartBeatResponse2',
      opacity: 1,
      translateX: 277,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page39HeartBeatResponse2',
      translateX: 77,
      easing: "linear",
      duration: 1500,
      complete: function () {

        anime({
          targets: '#Page39Log2Text',
          color: '#A1FF6F',
          easing: 'linear',
          duration: 0,
        });

        anime({
          targets: '#Page39HeartBeatResponse2',
          opacity: 1,
          translateX: 277,
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
        <div className="Page39NodeDes" id="Page39NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page39NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page39VoteCount1"> Leader: A</div>
        </div>
        
        <table className="Page39Log" id="Page39Log1">
          <tbody>
          <tr id="TR">
            <th>
              Log
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page39Log1Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page39Node" id="Page39Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page39ProgressBarBG1"
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
                id="Page39ProgressBarIT1"
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

        <div className="Page39NodeDes" id="Page39NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page39NodeTerm2"> Term: 1</div>
          <div className="NodeDesContent" id="Page39VoteCount2"> Vote Count: 3</div>
        </div>

        <table className="Page39Log" id="Page39Log2">
          <tbody>
          <tr id="TR">
            <th>
              Log
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page39Log2Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page39Node" id="Page39Node2">
          <span id='Page39Node2Text'> 5 </span>
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page39ProgressBarBG2"
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
                id="Page39ProgressBarIT2"
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
        
        

        <div className="Page39NodeDes" id="Page39NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page39NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page39VoteCount3"> Leader: A</div>
        </div>

        <table className="Page39Log" id="Page39Log3">
          <tbody>
          <tr id="TR">
            <th>
              Log
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page39Log3Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page39Node" id="Page39Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page39ProgressBarBG3"
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
                id="Page39ProgressBarIT3"
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
        <div className="Page39HeartBeat" id="Page39HeartBeat1"/>
        <div className="Page39HeartBeat" id="Page39HeartBeat2"/>
        <div className="Page39HeartBeatResponse" id="Page39HeartBeatResponse1"/>
        <div className="Page39HeartBeatResponse" id="Page39HeartBeatResponse2"/>
        <div className="Page39Client" id="Page39Client1"> 5 </div>
        <div className="Page39Text" id="Page39Text1"> An entry is committed once a majority of followers acknowledge it...</div>
      </div>
  );
}

export default Page39;