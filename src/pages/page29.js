import '../css/page29.css';
import React, {useEffect, useRef, useState} from 'react';
import anime from "animejs";

function Page29(props){
  ///////////////////////////////////////////////// reset //////////////////////////////////////////
  const progressBarRefs = useRef([]);
  const animationsRef = useRef([]);
  const heartBeatProgressLoopRef = useRef(null);
  const requestAndResponseRef = useRef(null);
  const heartBeatReplyReSendLoopRef = useRef(null);
  const heartBeatResponseRef = useRef(null);
  const heartBeatLoopSend1Ref = useRef(null);
  const heartBeatLoopSend2Ref = useRef(null);
  let textAnimation = null;

  let obj1 = document.querySelector('#Page29Node1');
  if(obj1 !== null) obj1.style.borderStyle = 'none';
  let obj2 = document.querySelector('#Page29NodeTerm1');
  if(obj2 !== null) obj2.innerHTML = 'Term: 1';
  let obj3 = document.querySelector('#Page29VoteCount1');
  if(obj3 !== null) obj3.innerHTML = 'Leader: A';

  let obj4 = document.querySelector('#Page29NodeTerm3');
  if(obj4 !== null) obj4.innerHTML = 'Term: 1';
  let obj5 = document.querySelector('#Page29VoteCount3');
  if(obj5 !== null) obj5.innerHTML = "Leader: A";

  let obj6 = document.querySelector('#Page29ProgressBarBG1');
  if(obj6 !== null) obj6.style.display = '';
  let obj7 = document.querySelector('#Page29ProgressBarIT1');
  if(obj7 !== null) obj7.style.display = '';

  anime({
    targets: '#Page29NodeDes1',
    duration: 0,
    translateX: 0,
    translateY: -170,
    easing: 'linear',
  });

  anime({
    targets: '#Page29NodeDes3',
    duration: 0,
    translateX: 100,
    translateY: 180,
    easing: 'linear',
  });

  anime({
    targets: '#Page29Request1',
    opacity: 1,
    translateX: 28,
    translateY: -72,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page29Request2',
    opacity: 1,
    translateX: 28,
    translateY: -72,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page29Signal1',
    opacity: 1,
    translateX: 130,
    translateY: 129,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page29HeartBeat1',
    opacity: 1,
    translateX: 28,
    translateY: -72,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page29HeartBeat2',
    opacity: 1,
    translateX: 28,
    translateY: -72,
    easing: "linear",
    duration: 0,
  });

  anime({
    targets: '#Page29HeartBeatResponse1',
    opacity: 1,
    translateX: 130,
    translateY: 129,
    easing: "linear",
    duration: 0,
  });



  useEffect(() => {
    const progressBars = progressBarRefs.current;

    ////////////////////////////////////////////////////////// candidate timeout ////////////////////////////////////
    const candidateTimeOut = progressBars.map((progressBar, index) =>
        anime({
          targets: progressBar,
          strokeDasharray: getStrokeDashArray(index), // 进度动画
          easing: 'linear',
          duration: 3000,
          loop: false,
          direction: "normal",
          autoplay: true,
          complete: function() {
            let obj1 = document.querySelector('#Page29Node1');
            if(obj1 !== null) obj1.style.borderStyle = 'dotted';
            let obj2 = document.querySelector('#Page29NodeTerm1');
            if(obj2 !== null) obj2.innerHTML = 'Term: 2';
            let obj3 = document.querySelector('#Page29VoteCount1');
            if(obj3 !== null) obj3.innerHTML = 'Vote Count: 1';
            anime({
              targets: '#Page29NodeDes1',
              duration: 0,
              translateX: -16,
              translateY: -170,
              easing: 'linear',
            });

            request1.play();
            request2.play();
            requestProgress.play();
          }
        })
    );

    animationsRef.current.push(candidateTimeOut);

    const requestProgress = anime({
      targets: progressBars[2],
      strokeDasharray: getStrokeDashArray(3), // 进度动画
      easing: 'linear',
      duration: 2000,
      loop: false,
      direction: "normal",
      autoplay: false,
    });

    const responseProgress = anime({
      targets: progressBars[2],
      strokeDasharray: getStrokeDashArray(4), // 进度动画
      easing: 'linear',
      duration: 2000,
      loop: false,
      direction: "normal",
      autoplay: false,
    });

    const heartBeatProgress = anime({
      targets: progressBars[2],
      strokeDasharray: getStrokeDashArray(5), // 进度动画
      easing: 'linear',
      duration: 2000,
      loop: false,
      direction: "normal",
      autoplay: false,
    });

    const heartBeatProgressLoop = anime({
      targets: progressBars[2],
      strokeDasharray: getStrokeDashArray(6), // 进度动画
      easing: 'linear',
      duration: 4000,
      direction: "normal",
      loop: true,
      autoplay: false,
    });

    heartBeatProgressLoopRef.current = heartBeatProgressLoop;

    //////////////////////////////////////////////////////////// request and response /////////////////////////////////////
    const requestAndResponse = anime.timeline();

    requestAndResponseRef.current = requestAndResponse;

    const request1 = anime.timeline({
      loop: false,
      autoplay: false,
    }).add({
      targets: '#Page29Request1',
      opacity: 1,
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page29Request1',
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime({
          targets: '#Page29Request1',
          opacity: 0,
          translateX: 28,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });
      }
    });

    const request2 = anime.timeline({
      loop: false,
      autoplay: false,
    }).add({
      targets: '#Page29Request2',
      opacity: 1,
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page29Request2',
      translateX: 130,
      translateY: 129,
      easing: "linear",
      duration: 2000,
      complete: function() {
        let obj2 = document.querySelector('#Page29NodeTerm3');
        if(obj2 !== null) obj2.innerHTML = 'Term: 2';
        let obj3 = document.querySelector('#Page29VoteCount3');
        if(obj3 !== null) obj3.innerHTML = "Voted For: B";
        anime({
          targets: '#Page29Request2',
          opacity: 0,
          translateX: 28,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page29NodeDes3',
          duration: 0,
          translateX: 88,
          translateY: 180,
          easing: 'linear',
        });

        response1.play();
        responseProgress.play();
      }
    });


    let response1 = anime.timeline({
      loop: false,
      autoplay: false,
    }).add({
      targets: '#Page29Signal1',
      opacity: 1,
      translateX: 130,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page29Signal1',
      opacity: 1,
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 2000,
      complete: function() {
        let obj1 = document.querySelector('#Page29VoteCount1');
        obj1.innerHTML = "Vote Count: 2";
        anime({
          targets: '#Page29Signal1',
          opacity: 1,
          translateX: 130,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });

        let obj2 = document.querySelector('#Page29Node1');
        obj2.style.borderStyle = 'solid';

        let obj3 = document.querySelector('#Page29ProgressBarBG1');
        if(obj3 !== null) obj3.style.display = 'none';
        let obj4 = document.querySelector('#Page29ProgressBarIT1');
        if(obj4 !== null) obj4.style.display = 'none';

        heartBeat1.play();
        heartBeat2.play();
        heartBeatProgress.play();
      }
    });


    // //////////////////////////////////////////////////////// heart beat and loop /////////////////////////////////////////

    // 先清除现有的动画实例
    if (heartBeatReplyReSendLoopRef.current) {
      heartBeatReplyReSendLoopRef.current.pause();
      anime.remove(heartBeatReplyReSendLoopRef.current);
    }

    let heartBeat1 = anime.timeline({
      loop: false,
      autoplay: false,
    }).add({
      targets: '#Page29HeartBeat1',
      opacity: 1,
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page29HeartBeat1',
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime({
          targets: '#Page29HeartBeat1',
          opacity: 1,
          translateX: 28,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });
      }
    });

    let heartBeat2 = anime.timeline({
      loop: false,
      autoplay: false,
    }).add({
      targets: '#Page29HeartBeat2',
      opacity: 1,
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page29HeartBeat2',
      translateX: 130,
      translateY: 129,
      easing: "linear",
      duration: 2000,
      complete: function() {
        let obj3 = document.querySelector('#Page29VoteCount3');
        if(obj3 !== null) obj3.innerHTML = "Leader: B";

        anime({
          targets: '#Page29NodeDes3',
          duration: 0,
          translateX: 100,
          translateY: 180,
          easing: 'linear',
        });

        anime({
          targets: '#Page29HeartBeat2',
          opacity: 1,
          translateX: 28,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page29ProgressBarIT3',
          strokeDasharray: '1 251.2', // 进度动画
          easing: 'linear',
          duration: 0,
          direction: "normal",
          loop: false,
          autoplay: false,
        });
        heartBeatProgressLoopRef.current.play();
        heartBeatReplyReSendLoopRef.current.pause();
        heartBeatReplyReSendLoopRef.current.play();

      }
    });

    const heartBeatReplyReSendLoop = anime.timeline({
      loop: true,
      autoplay: false,
    }).add({
      targets: '#Page29HeartBeatResponse1',
      opacity: 1,
      translateX: 130,
      translateY: 129,
      easing: "linear",
      duration: 0,
    }).add({
      targets: '#Page29HeartBeatResponse1',
      translateX: 28,
      translateY: -72,
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime({
          targets: '#Page29HeartBeatResponse1',
          opacity: 1,
          translateX: 130,
          translateY: 129,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page29HeartBeat1',
      opacity: 1,
      translateX: -73,
      translateY: 129,
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime ({
          targets: '#Page29HeartBeat1',
          opacity: 1,
          translateX: 28,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });
      }
    }).add({
      targets: '#Page29HeartBeat2',
      opacity: 1,
      translateX: 130,
      translateY: 129,
      easing: "linear",
      duration: 2000,
      offset: 0,
      complete: function () {
        anime({
          targets: '#Page29HeartBeat2',
          opacity: 1,
          translateX: 28,
          translateY: -72,
          easing: "linear",
          duration: 0,
        });
      }
    }, '-=2000');
    heartBeatReplyReSendLoopRef.current = heartBeatReplyReSendLoop;


    return () => {
      if (heartBeatReplyReSendLoopRef.current) {
        heartBeatReplyReSendLoopRef.current.pause();
        // anime.remove(heartBeatReplyReSendLoopRef.current);
        heartBeatReplyReSendLoopRef.current = null;
      }
      if (heartBeatProgressLoopRef.current) {
        heartBeatProgressLoopRef.current.pause();
        anime.remove(heartBeatProgressLoopRef.current);
      }
      if (heartBeatResponseRef.current) {
        heartBeatResponseRef.current.pause();
        heartBeatResponseRef.current = null;
      }
      if (heartBeatLoopSend1Ref.current) {
        heartBeatLoopSend1Ref.current.pause();
        heartBeatLoopSend1Ref.current = null;
      }
      if (heartBeatLoopSend2Ref.current) {
        heartBeatLoopSend2Ref.current.pause();
        heartBeatLoopSend2Ref.current = null;
      }
      candidateTimeOut.forEach((animation) => animation.pause()); // 在组件卸载时停止动画
      animationsRef.current.forEach((animations) => {
        animations.forEach((animation) => {
          animation.pause();
        });
      });
    };
  }, []);

  const getStrokeDashArray = (index) => {
    switch (index) {
      case 0:
        return ['1 251.2', '251.2 251.2'];
      case 1:
        return ['1 251.2', '65 251.2'];
      case 2:
        return ['1 251.2', '120 251.2'];
      case 3:
        return ['120 251.2', '200 251.2'];
      case 4:
        return ['1 251.2', '80 251.2'];
      case 5:
        return ['80 251.2', '160 251.2'];
      case 6:
        return ['1 251.2', '160 251.2'];
      default:
        return [];
    }
  };

  textAnimation = anime.timeline({
    loop: false,
    autoplay: false,
  }).add({
    targets: '#Page29Text1',
    scaleX: [1,0],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 400,
    delay: 9000,
  }).add({
    targets: '#Page29Text2',
    scaleX: [0,1],
    opacity: [0,1],
    easing: "easeInExpo",
    duration: 400,
  }).add({
    targets: '#Page29Text2',
    scaleX: [1,0],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 400,
    delay: 3500,
  }).add({
    targets: '#Page29Text3',
    scaleX: [0,1],
    opacity: [0,1],
    easing: "easeInExpo",
    duration: 400,
  }).add({
    targets: '#Page29Text3',
    scaleX: [1,0],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 400,
    delay: 7000,
  }).add({
    targets: '#Page29Text4',
    scaleX: [0,1],
    opacity: [0,1],
    easing: "easeInExpo",
    duration: 400,
  }).add({
    targets: '#Page29Text4',
    scaleX: [1,0],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 400,
    delay: 5000,
  }).add({
    targets: '#Page29Text5',
    scaleX: [0,1],
    opacity: [0,1],
    easing: "easeInExpo",
    duration: 400,
  });

  if(props.display){
    if(textAnimation !== null) textAnimation.play();
  }

  useEffect(() => {
    if (props.display) {
      animationsRef.current.forEach((animations) => {
        animations.forEach((animation) => {
          animation.restart();
        });
      });
    }
    else{
      if (heartBeatProgressLoopRef.current) { heartBeatProgressLoopRef.current.pause(); }
      if (heartBeatReplyReSendLoopRef.current) { heartBeatReplyReSendLoopRef.current.pause(); }
      if(textAnimation !== null){
        textAnimation.pause();
        textAnimation = null;
      }
    }
  }, [props.display]);

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page29NodeDes" id="Page29NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent" id="Page29NodeTerm1"> Term: 1</div>
          <div className="NodeDesContent" id="Page29VoteCount1"> Leader: A</div>
        </div>
        <div className="Page29Node" id="Page29Node1">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page29ProgressBarBG1"
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
                id="Page29ProgressBarIT1"
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

        <div className="Page29NodeDes" id="Page29NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent" id="Page29NodeTerm2"> Term: 1</div>
        </div>

        <div className="Page29Node" id="Page29Node2" style={{backgroundColor: "#ddd"}}>
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page29ProgressBarBG2"
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
                id="Page29ProgressBarIT2"
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

        <div className="Page29NodeDes" id="Page29NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent" id="Page29NodeTerm3"> Term: 1</div>
          <div className="NodeDesContent" id="Page29VoteCount3"> Leader: A</div>
        </div>

        <div className="Page29Node" id="Page29Node3">
          <svg className="progress-bar" viewBox="0 0 100 100">
            <circle
                className="progress-bar-background"
                id="Page29ProgressBarBG3"
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
                id="Page29ProgressBarIT3"
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
        <div className="Page29Request" id="Page29Request1"/>
        <div className="Page29Request" id="Page29Request2"/>
        <div className="Page29Signal" id="Page29Signal1"/>
        <div className="Page29HeartBeat" id="Page29HeartBeat1"/>
        <div className="Page29HeartBeat" id="Page29HeartBeat2"/>
        <div className="Page29HeartBeatResponse" id="Page29HeartBeatResponse1"/>
        <div className="Page29Text" id="Page29Text1"> What if Node A is disconnected.</div>
        <div className="Page29Text" id="Page29Text2"> Node B is now leader of term 2.</div>
        <div className="Page29Text" id="Page29Text3"> Requiring a majority of votes guarantees that only one leader can be elected per term.</div>
        <div className="Page29Text" id="Page29Text4"> If two nodes become candidates at the same time then a split vote can occur.</div>
        <div className="Page29Text" id="Page29Text5"> Let's take a look at a split vote example...</div>

      </div>
  );
}

export default Page29;