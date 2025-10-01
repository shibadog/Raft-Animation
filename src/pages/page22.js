import '../css/page22.css';
import React, { useEffect, useRef } from 'react';
import anime from "animejs";

function Page22(props){
  const progressBarRefs = useRef([]);
  useEffect(() => {
    const progressBars = progressBarRefs.current;

    const animations = progressBars.map((progressBar, index) =>
        anime({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index), // 进度动画
          easing: 'linear',
          duration: getDuration(index),
          loop: true,
          direction: 'alternate',
          autoplay: true,
        })
    );

    return () => {
      animations.forEach((animation) => animation.pause()); // 在组件卸载时停止动画
    };
  }, []);

  const getStrokeDashArray = (index) => {
    switch (index) {
      case 0:
        return ['0 251.2', '62.8 251.2']; // 25% = 62.8/251.2; 251.2 = 2*pi*r, r=40
      case 1:
        return ['0 251.2', '95.36 251.2'];
      case 2:
        return ['0 251.2', '188.4 251.2'];
      default:
        return [];
    }
  };

  const getDuration = (index) => {
    switch (index) {
      case 0:
        return 1500;
      case 1:
        return 3000;
      case 2:
        return 500;
      default:
        return 1500;
    }
  };

  function animation() {
    let animation3 = anime.timeline().add({
      targets: '#Page22Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 2000,
    }).add({
      targets: '#Page22Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page22Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3000,
    }).add({
      targets: '#Page22Text3',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page22Text3',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3000,
    }).add({
      targets: '#Page22Text4',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    });
  }

  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page22NodeDes" id="Page22NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page22Node" id="Page22Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
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

        <div className="Page22NodeDes" id="Page22NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>

        <div className="Page22Node" id="Page22Node2">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
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

        <div className="Page22NodeDes" id="Page22NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>

        <div className="Page22Node" id="Page22Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
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

        <div className="Page22Text" id="Page22Text1"> Raftには選出を制御する2つのタイムアウト設定があります。 </div>
        <div className="Page22Text" id="Page22Text2"> 1つ目は<span id="Focus">選出タイムアウト</span>です。 </div>
        <div className="Page22Text" id="Page22Text3"> 選出タイムアウトは、フォロワーが候補者になるまで待つ時間です。</div>
        <div className="Page22Text" id="Page22Text4"> 選出タイムアウトは150msから300msの間でランダム化されます。</div>
      </div>
  );
}

export default Page22;