import '../css/page40.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page40(props){
  let obj1 = document.getElementById('Page40Node1Text');
  if(obj1 != null) obj1.style.display = 'none';
  let obj2 = document.getElementById('Page40Node3Text');
  if(obj2 != null) obj2.style.display = 'none';

  let obj3 = document.getElementById('Page40Log1Text');
  if(obj3 != null) obj3.style.color = 'white';
  let obj4 = document.getElementById('Page40Log3Text');
  if(obj4 != null) obj4.style.color = 'white';

  anime({
    targets: '#Page40Log2Text',
    color: '#A1FF6F',
    easing: 'linear',
    duration: 0,
  });

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
          duration: 2000,
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
        return ['65 251.2', '110 251.2'];
      case 1:
        return ['1 251.2', '65 251.2'];
      case 2:
        return ['65 251.2', '160 251.2'];
      default:
        return [];
    }
  };

  function animation() {

    let animation = anime.timeline({
      loop: false,
    }).add({
      targets: '#Page40Request1',
      opacity: 1,
      translateX: [77, -123],
      translateY: [129, 27],
      easing: "linear",
      duration: 1000,
      complete: function(){
        anime({
          targets: '#Page40Request1',
          opacity: 1,
          translateX: [-123, 77],
          translateY: [27, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation1 = anime.timeline({
      loop: false,
    }).add({
        targets: '#Page40HeartBeat1',
        opacity: 1,
        translateX: [77, 178],
        translateY: [129, -72],
        easing: "linear",
        duration: 1500,
        delay: 500,
        complete: function(){
          let obj1 = document.querySelector('#Page40Node1Text');
          obj1.style.display = '';
          
          anime({
            targets: '#Page40Log1Text',
            color: '#A1FF6F',
            easing: 'linear',
            duration: 0,
          });
          
          anime({
            targets: '#Page40HeartBeat1',
            opacity: 1,
            translateX: [178, 77],
            translateY: [-72, 129],
            easing: "linear",
            duration: 0,
          });
        }
      });

    let animation2 = anime.timeline({
      loop: false,
    }).add({
      targets: '#Page40HeartBeat2',
      translateX: [77, 280],
      translateY: [129, 129],
      easing: "linear",
      duration: 1500,
      delay: 500,
      complete: function(){
        let obj1 = document.querySelector('#Page40Node3Text');
        obj1.style.display = '';

        anime({
          targets: '#Page40Log3Text',
          color: '#A1FF6F',
          easing: 'linear',
          duration: 0,
        });

        anime({
          targets: '#Page40HeartBeat2',
          opacity: 1,
          translateX: [280, 77],
          translateY: [129, 129],
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
        <div className="Page40NodeDes" id="Page40NodeDes1">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent" id="Page40NodeTerm1"> 任期: 1</div>
          <div className="NodeDesContent" id="Page40VoteCount1"> Leader: A</div>
        </div>
        
        <table className="Page40Log" id="Page40Log1">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page40Log1Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page40Node" id="Page40Node1">
          <span id='Page40Node1Text'> 5 </span>
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page40ProgressBarBG1"
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
                id="Page40ProgressBarIT1"
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

        <div className="Page40NodeDes" id="Page40NodeDes2">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent" id="Page40NodeTerm2"> 任期: 1</div>
          <div className="NodeDesContent" id="Page40VoteCount2"> Vote Count: 3</div>
        </div>

        <table className="Page40Log" id="Page40Log2">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page40Log2Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page40Node" id="Page40Node2">
          <span id='Page40Node2Text'> 5 </span>
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page40ProgressBarBG2"
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
                id="Page40ProgressBarIT2"
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
        
        

        <div className="Page40NodeDes" id="Page40NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent" id="Page40NodeTerm3"> 任期: 1</div>
          <div className="NodeDesContent" id="Page40VoteCount3"> Leader: A</div>
        </div>

        <table className="Page40Log" id="Page40Log3">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page40Log3Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        
        <div className="Page40Node" id="Page40Node3">
          <span id='Page40Node3Text'> 5 </span>
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page40ProgressBarBG3"
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
                id="Page40ProgressBarIT3"
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

        <div className="Page40HeartBeat" id="Page40HeartBeat1"/>
        <div className="Page40HeartBeat" id="Page40HeartBeat2"/>
        <div className="Page40Request" id="Page40Request1"/>
        <div className="Page40Client" id="Page40Client1"> 5 </div>
        <div className="Page40Text" id="Page40Text1"> ...そしてクライアントに応答が送信されます。</div>
      </div>
  );
}

export default Page40;