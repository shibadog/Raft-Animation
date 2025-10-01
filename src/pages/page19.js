import '../css/page19.css';
import React from 'react'
import anime from "animejs";

function Page19(props){
  let obj1 = document.getElementById('Page19Log1Text');
  if(obj1 != null) obj1.style.color = 'white';

  let obj2 = document.getElementById('Page19Node1Text');
  if(obj2 != null) obj2.style.display = 'none';

  function animation(){
    let animation = anime({
      targets: ["#Page19Log1", "#Page19Log2", "#Page19Log3"],
      opacity: 1,
      duration: 0
    });

    let animation1 = anime.timeline().add({
      targets: '#Page19Signal1',
      opacity: 1,
      translateX: [178, 77],
      translateY: [-72, 129],
      easing: "linear",
      duration: 2000,
      complete: function () {
        let obj2 = document.querySelector('#Page19Log2');
        obj2.style.opacity = 1;
        anime({
          targets: '#Page19Signal1',
          opacity: 1,
          translateX: [77, 178],
          translateY: [129, -72],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page19Signal2',
      opacity: 1,
      translateX: [277, 77],
      translateY: [129, 129],
      easing: "linear",
      duration: 2000,
      complete: function() {
        anime({
          targets: '#Page19Signal2',
          opacity: 1,
          translateX: [77, 277],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });

        anime({
          targets: '#Page19Log1Text',
          color: '#A1FF6F',
          easing: 'linear',
          duration: 0,
        });

        let obj = document.getElementById('Page19Node1Text');
        if(obj != null) obj.style.display = '';
      }
    });

    let animetion3 = anime.timeline().add({
      targets: '#Page19Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 2000,
    }).add({
      targets: '#Page19Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    });
  }
  if(props.display) animation();


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page19Node" id="Page19Node1"> <span id='Page19Node1Text'> 5 </span> </div>
        <div className="Page19NodeDes" id="Page19NodeDes1">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <table className="Page19Log" id="Page19Log1">
          <tbody>
          <tr id="TR">
            <th>
              ログ
            </th>
          </tr>
          <tr id="TR">
            <td>
              <font id='Page19Log1Text'> SET 5 </font>
            </td>
          </tr>
          </tbody>
        </table>

        <div className="Page19Node" id="Page19Node2"/>
        <div className="Page19NodeDes" id="Page19NodeDes2">
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <table className="Page19Log" id="Page19Log2">
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

        <div className="Page19NodeDes" id="Page19NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page19Node" id="Page19Node3"/>
        <table className="Page19Log" id="Page19Log3">
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
        <div className="Page19Client" id="Page19Client1"> 5 </div>
        <div className="Page19Signal" id="Page19Signal1"/>
        <div className="Page19Signal" id="Page19Signal2"/>
        <div className="Page19Text" id="Page19Text1"> その後、リーダーは過半数のノードがエントリを書き込むまで待機します。 </div>
        <div className="Page19Text" id="Page19Text2"> エントリはリーダーノードでコミットされ、ノードの状態は「5」になります。 </div>
      </div>
  );
}

export default Page19;