import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxBanner } from 'react-scroll-parallax'

function ParallaxFX() {

  return (
    <div>
       <Parallax pages={4}>

       <ParallaxLayer
            className='collage2'
            speed={.5}
            offset={4}
            factor={4}
            style={{
              backgroundImage: "url(https://i.ibb.co/6nttKZ7/Untitled4.png)",
              backgroundSize: 'cover',
            }}
            >

    </ParallaxLayer>

       <ParallaxLayer
        className='collageImg'
        speed={1}
        offset={1}
        factor={4}
        style={{
          backgroundImage: "url(https://i.ibb.co/55gLGzf/37Wseut.jpg)",
          backgroundSize: 'cover',
        }}
        >
        </ParallaxLayer>

        <ParallaxLayer
        speed={1.5}
        >
        <img className='collage1' src='https://i.ibb.co/ZHyNtyk/collage-1.png'/>
        </ParallaxLayer>

     

       </Parallax>
          
         {/* <img className='collageImg' src='https://i.ibb.co/55gLGzf/37Wseut.jpg'></img> */}
    </div>
  )
}

export default ParallaxFX