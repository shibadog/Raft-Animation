import '../css/page20.css';
import React from 'react'
import anime from "animejs";

function Page20(props){
  let objs = document.getElementsByClassName('Page20NodeText');
  [].forEach.call(objs, element => element.style.display = 'none');

  let obj1 = document.getElementById('Page20Log2Text');
  if(obj1 != null) obj1.style.color = 'white';

  let obj2 = document.getElementById('Page20Log3Text');
  if(obj2 != null) obj2.style.color = 'white';

  function animation(){
    let animation = anime({
      targets: ["#Page20Log1", "#Page20Log2", "#Page20Log3"],
      opacity: 1,
      duration: 0
    });

    anime({
      targets: '#Page20Log1Text',
      color: '#A1FF6F',
      easing: 'linear',
      duration: 0,
    });

    let animation1 = anime.timeline().add({
      targets: '#Page20Request1',
      opacity: 1,
      translateX: [77, 178],
      translateY: [129, -72],
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime({
          targets: '#Page20Request1',
          opacity: 1,
          translateX: [178, 77],
          translateY: [-72, 129],
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page20Log2Text',
          color: '#A1FF6F',
          easing: 'linear',
          duration: 0,
        });

        let obj = document.getElementById('Page20Node2Text');
        if(obj != null) obj.style.display = '';
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page20Request2',
      opacity: 1,
      translateX: [77, 277],
      translateY: [129, 129],
      easing: "linear",
      duration: 2000,
      complete: function() {
        anime({
          targets: '#Page20Request2',
          opacity: 1,
          translateX: [277, 77],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page20Log3Text',
          color: '#A1FF6F',
          easing: 'linear',
          duration: 0,
        });

        let obj = document.getElementById('Page20Node3Text');
        if(obj != null) obj.style.display = '';
      }
    });

    let animetion4 = anime.timeline().add({
      targets: '#Page20Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 2500,
    }).add({
      targets: '#Page20Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page20Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 2500,
    }).add({
      targets: '#Page20Text3',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    })

  }
  if(props.display) animation();


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page20Node" id="Page20Node1"> <span id='Page20Node1Text'> 5 </span> </div>
        <div className="Page20NodeDes" id="Page20NodeDes1">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <table className="Page20Log" id="Page20Log1">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page20Log1Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>

        <div className="Page20Node" id="Page20Node2"> <span className="Page20NodeText" id='Page20Node2Text'> 5 </span> </div>
        <div className="Page20NodeDes" id="Page20NodeDes2">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <table className="Page20Log" id="Page20Log2">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page20Log2Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>

        <div className="Page20NodeDes" id="Page20NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page20Node" id="Page20Node3"> <span className="Page20NodeText" id='Page20Node3Text'> 5 </span> </div>
        <table className="Page20Log" id="Page20Log3">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page20Log3Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="Page20Client" id="Page20Client1"> 5 </div>
        <div className="Page20Request" id="Page20Request1"/>
        <div className="Page20Request" id="Page20Request2"/>
        <div className="Page20Text" id="Page20Text1"> その後、リーダーはフォロワーにエントリがコミットされたことを通知します。 </div>
        <div className="Page20Text" id="Page20Text2"> クラスタはシステムの状態について合意に達しました。 </div>
        <div className="Page20Text" id="Page20Text3"> このプロセスは<span id="Focus">ログレプリケーション</span>と呼ばれます。 </div>
      </div>
  );
}

export default Page20;