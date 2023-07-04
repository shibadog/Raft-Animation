import './App.css';
import React, {useState} from "react";
import Page0 from "./pages/page0";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import Page10 from "./pages/page10";
import Page11 from "./pages/page11";
import Page12 from "./pages/page12";
import Page13 from "./pages/page13";
import Page14 from "./pages/page14";
import Page15 from "./pages/page15";
import Page16 from "./pages/page16";
import Page17 from "./pages/page17";
import Page18 from "./pages/page18";
import Page19 from "./pages/page19";
import Page20 from "./pages/page20";
import Page21 from "./pages/page21";
import Page22 from "./pages/page22";
import Page23 from "./pages/page23";
import Page24 from "./pages/page24";
import Page25 from "./pages/page25";
import Page26 from "./pages/page26";
import Page27 from "./pages/page27";
import Page28 from "./pages/page28";
import Page29 from "./pages/page29";
import Page30 from "./pages/page30";
import Page31 from "./pages/page31";
import Page32 from "./pages/page32";
import Page33 from "./pages/page33";
import Page34 from "./pages/page34";
import Page35 from "./pages/page35";
import Page36 from "./pages/page36";
import Page37 from "./pages/page37";
import Page38 from "./pages/page38";
import Page39 from "./pages/page39";
import Page40 from "./pages/page40";
import Page41 from "./pages/page41";


function App() {
  const [count, setCount] = useState(1);
  function clickBack(){
    setCount(count-1);
  }

  function clickNext(){
    setCount(count+1);
  }

  return (
      <div className="App">
        <div className="content" style={{display: count===0?'': 'none'}}>
          click this {count}
        </div>
        <Page0 display = {count === 0}/>
        <Page1 display = {count === 1}/>
        <Page2 display = {count === 2}/>
        <Page3 display = {count === 3}/>
        <Page4 display = {count === 4}/>
        <Page5 display = {count === 5}/>
        <Page6 display = {count === 6}/>
        <Page7 display = {count === 7}/>
        <Page8 display = {count === 8}/>
        <Page9 display = {count === 9}/>
        <Page10 display = {count === 10}/>
        <Page11 display = {count === 11}/>
        <Page12 display = {count === 12}/>
        <Page13 display = {count === 13}/>
        <Page14 display = {count === 14}/>
        <Page15 display = {count === 15}/>
        <Page16 display = {count === 16}/>
        <Page17 display = {count === 17}/>
        <Page18 display = {count === 18}/>
        <Page19 display = {count === 19}/>
        <Page20 display = {count === 20}/>
        <Page21 display = {count === 21}/>
        <Page22 display = {count === 22}/>
        <Page23 display = {count === 23}/>
        <Page24 display = {count === 24}/>
        <Page25 display = {count === 25}/>
        <Page26 display = {count === 26}/>
        <Page27 display = {count === 27}/>
        <Page28 display = {count === 28}/>
        <Page29 display = {count === 29}/>
        <Page30 display = {count === 30}/>
        <Page31 display = {count === 31}/>
        <Page32 display = {count === 32}/>
        <Page33 display = {count === 33}/>
        <Page34 display = {count === 34}/>
        <Page35 display = {count === 35}/>
        <Page36 display = {count === 36}/>
        <Page37 display = {count === 37}/>
        <Page38 display = {count === 38}/>
        <Page39 display = {count === 39}/>
        <Page40 display = {count === 40}/>
        <Page41 display = {count === 41}/>

        <div className="continueButton">
          <button type="button" className="btn btn-outline-danger" onClick={clickBack} style={{display: count>1?'': 'none'}}> Back &lt;</button>
          <button type="button" className="btn btn-outline-danger" onClick={clickNext} style={{display: count<41?'': 'none'}}> Next &gt;</button>
        </div>
      </div>
  );
}

export default App;
