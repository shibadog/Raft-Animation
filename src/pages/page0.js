import '../css/page0.css';
import React from 'react'
import ReactAnime from 'react-animejs'
const {Anime} = ReactAnime;

function Page0(props){
    return(
        <div style={{display: props.display?'': 'none'}}>
          <Anime className="animation"
                 initial={[
                   {
                     targets: "#Box1",
                     keyframes: [
                       {
                         translateX: 50
                       },
                       {
                         translateY: 50
                       },
                       {
                         translateX: 0
                       },
                       {
                         translateY: 0
                       }
                     ],
                     // easing:'spring',
                     duration: 3500,
                     loop: true
                   }
                 ]}
          >
            {/*<div id="Box1" />*/}
          </Anime>

          <Anime className="animation"
            initial={[
                {
                  targets: "#Box2",
                  keyframes: [
                    {
                      translateX: 150
                    },
                    {
                      translateY: 150
                    },
                    {
                      translateX: 100
                    },
                    {
                      translateY: 100
                    }
                  ],
                  // easing:'spring',
                  duration: 5000,
                  loop: true
                }
                ]}
          >
          <div id="Box1"/>
          <div id="Box2"/>
        </Anime>
    </div>
    );
}

export default Page0;