import React from 'react'
import { useState } from 'react'

function Logo() {

  const [animate, setAnimate] = useState('')

  const logoClick = ()=>{
    setAnimate('animatedCube')
    setTimeout(()=> {
      setAnimate('')
    }, 3000)
  }

  return (
    <div>
        <img src='https://i.ibb.co/qrRw0Fd/Cube-TWO-cut1.png' className={animate} id='cubeLogo' onClick={logoClick}></img>
        {/* <img src='https://i.ibb.co/VmPhP43/cube-Logo-No-Shadow1.png' id='cubeLogo'></img> */}
    </div>
  )
}

export default Logo