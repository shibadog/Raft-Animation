import '../css/page18.css';
import React from 'react'
import anime from "animejs";

function Page18(props){
  let objs3 = document.getElementsByClassName('Page18Log');
  [].forEach.call(objs3, element => element.style.opacity = 0);

  function animation(){
    let animation = anime({
      targets: "#Page18Log1",
      opacity: 1,
      duration: 0
    });
    let animation1 = anime.timeline().add({
      targets: '#Page18Request1',
      opacity: 1,
      translateX: [77, 178],
      translateY: [129, -72],
      easing: "linear",
      duration: 2000,
      complete: function () {
        let obj2 = document.querySelector('#Page18Log2');
        obj2.style.opacity = 1;
        anime({
          targets: '#Page18Request1',
          opacity: 1,
          translateX: [178, 77],
          translateY: [-72, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page18Request2',
      opacity: 1,
      translateX: [77, 277],
      translateY: [129, 129],
      easing: "linear",
      duration: 2000,
      complete: function() {
        let obj2 = document.querySelector('#Page18Log3');
        obj2.style.opacity = 1;
        anime({
          targets: '#Page18Request2',
          opacity: 1,
          translateX: [277, 77],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });
  }
  if(props.display) animation();


  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page18Node" id="Page18Node1"/>
        <div className="Page18NodeDes" id="Page18NodeDes1">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <table className="Page18Log" id="Page18Log1">
          <tbody>
          <tr id="TR">
            <th>
              Log
            </th>
          </tr>
          <tr id="TR">
            <td>
              SET 5
            </td>
          </tr>
          </tbody>
        </table>

        <div className="Page18Node" id="Page18Node2"/>
        <div className="Page18NodeDes" id="Page18NodeDes2">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <table className="Page18Log" id="Page18Log2">
          <tbody>
          <tr id="TR">
            <th>
              Log
            </th>
          </tr>
          <tr id="TR">
            <td>
              SET 5
            </td>
          </tr>
          </tbody>
        </table>

        <div className="Page18NodeDes" id="Page18NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page18Node" id="Page18Node3"/>
        <table className="Page18Log" id="Page18Log3">
          <tbody>
          <tr id="TR">
            <th>
              Log
            </th>
          </tr>
          <tr id="TR">
            <td>
              SET 5
            </td>
          </tr>
          </tbody>
        </table>
        <div className="Page18Client" id="Page18Client1"> 5 </div>
        <div className="Page18Request" id="Page18Request1"/>
        <div className="Page18Request" id="Page18Request2"/>
        <div className="Page18Text" id="Page18Text1"> To commit the entry the node first replicates it to the follower nodes. </div>
      </div>
  );
}

export default Page18;