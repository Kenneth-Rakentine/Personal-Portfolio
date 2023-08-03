import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function ParallaxFX() {

  return (
    <div>
        <Parallax pages={4}>   

        <ParallaxLayer>

        </ParallaxLayer>
        
        <ParallaxLayer>
            
        </ParallaxLayer>
           
        <ParallaxLayer offset={1}>
        <img className='collageImg' src='https://i.ibb.co/55gLGzf/37Wseut.jpg'></img>

        </ParallaxLayer>
        
          
        </Parallax>  
    </div>
  )
}

export default ParallaxFX