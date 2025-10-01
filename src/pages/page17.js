import '../css/page17.css';
import React from 'react'
import anime from "animejs";

function Page17(props){
  let objs = document.getElementsByClassName('Page17Node');
  [].forEach.call(objs, element => element.style.opacity = 0);
  let objs2 = document.getElementsByClassName('Page17NodeDes');
  [].forEach.call(objs2, element => element.style.display = "none");
  let obj = document.querySelector('#Page17Log1');
  if(obj !== null) obj.style.display = 'none';

  function animation(){
    let animation1 = anime.timeline().add({
      targets: '#Page17Node1',
      opacity: [0, 1],
      translateX: [150, 50],
      translateY: [0, 100],
      easing: "linear",
      duration: 500,
      complete: function() {
        let obj1 = document.querySelector('#Page17NodeDes1');
        obj1.style.display = '';
      }
    }).add({
      targets: '#Page17Node2',
      opacity: [0, 1],
      translateX: [150, 150],
      translateY: [0, -100],
      easing: "linear",
      duration: 500,
      complete: function() {
        let obj1 = document.querySelector('#Page17NodeDes2');
        obj1.style.display = '';
      }
    }).add({
      targets: '#Page17Node3',
      opacity: [0, 1],
      translateX: [150, 250],
      translateY: [0, 100],
      easing: "linear",
      duration: 500,
      complete: function() {
        let obj1 = document.querySelector('#Page17NodeDes3');
        obj1.style.display = '';
      }
    }).add({
      targets: '#Page17Request1',
      opacity: 1,
      translateX: [-123, 77],
      translateY: [27, 127],
      easing: "linear",
      duration: 2000,
      complete: function() {
        let obj1 = document.querySelector('#Page17Log1');
        obj1.style.display = '';
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page17Text1',
      scaleX: [1, 0],
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 500,
    }, '+=3000').add({
      targets: '#Page17Text2',
      scaleX: [0, 1],
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 500,
    }).add({
      targets: '#Page17Text2',
      scaleX: [1, 0],
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 500,
      delay: 2000,
    }).add({
      targets: '#Page17Text3',
      scaleX: [0, 1],
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 500,
    });
  }
  if(props.display) animation();


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page17Node" id="Page17Node1"/>
        <div className="Page17NodeDes" id="Page17NodeDes1">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page17Request" id="Page17Request1"/>
        <table className="Page17Log" id="Page17Log1">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              SET 5
            </td>
          </tr>
          </tbody>
        </table>

        <div className="Page17Node" id="Page17Node2"/>
        <div className="Page17NodeDes" id="Page17NodeDes2">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>

        <div className="Page17NodeDes" id="Page17NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page17Node" id="Page17Node3"/>

        <div className="Page17Client" id="Page17Client1"> 5 </div>

        <div className="Page17Text" id="Page17Text1"> システムへのすべての変更はリーダーを経由します。 </div>
        <div className="Page17Text" id="Page17Text2"> 各変更はノードの<span id="Focus">ログ</span>にエントリとして追加されます。</div>
        <div className="Page17Text" id="Page17Text3"> このログエントリは現在コミットされていないため、ノードの値は更新されません。</div>
      </div>
  );
}

export default Page17;