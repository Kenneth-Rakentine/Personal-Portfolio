import React from 'react'



function HeadBar() {

  const clicker = ()=>{
     window.scrollTo(0, document.body.scrollHeight);
  }
    
  return (
    <div className='headBarContainer' onClick={clicker}>
        {/* <button id='focusButton'> BOTTOM </button> */}
        
     </div>
  )
}

export default HeadBar