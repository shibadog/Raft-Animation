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
          <div className="NodeDesContent"> ノード b</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page14Node" id="Page14Node1"/>
        <div className="Page14NodeDes" id="Page14NodeDes2">
          <div className="NodeDesContent"> ノード a</div>
          <div className="NodeDesContent"> 任期: 0</div>
          <div className="NodeDesContent"> 投票数: 0/2</div>
        </div>
        <div className="Page14Node" id="Page14Node2"/>
        <div className="Page14NodeDes" id="Page14NodeDes3">
          <div className="NodeDesContent"> ノード c</div>
          <div className="NodeDesContent"> 任期: 0</div>
        </div>
        <div className="Page14Node" id="Page14Node3"/>
        <div className="Page14Text" id="Page14Text1"> フォロワーがリーダーから応答を受け取らない場合、候補者になることができます。 </div>
      </div>
  );
}

export default Page14;