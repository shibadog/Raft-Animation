import '../css/page14.css';
import React from 'react'
import anime from "animejs";

function Page14(props){

  function animation(){
    anime.timeline().add({
      targets: '#Page14Node2',
      borderWidth: [0, 6],
      duration: 600,
      easing: "linear",
    })
  }
  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page14NodeDes" id="Page14NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page14Node" id="Page14Node1"/>
        <div className="Page14NodeDes" id="Page14NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
          <div className="NodeDesContent"> Vote Count: 0/2</div>
        </div>
        <div className="Page14Node" id="Page14Node2"/>
        <div className="Page14NodeDes" id="Page14NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page14Node" id="Page14Node3"/>
        <div className="Page14Text" id="Page14Text1"> If followers don't hear from a leader then they can become a candidate. </div>
      </div>
  );
}

export default Page14;