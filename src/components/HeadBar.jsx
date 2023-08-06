import React from 'react'



function HeadBar() {

  const clicker = ()=>{
     window.scrollTo(0, document.body.scrollHeight);
  }
    
  return (
    <div className='headBarContainer' onClick={clicker}>
        
     </div>
  )
}

export default HeadBar