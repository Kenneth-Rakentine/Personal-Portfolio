import React from 'react'

function Name() {

    const reload = ()=>{
        window.location.href= '/'
    }
    return (
        <div className='namecontainer'>
            <strong onClick={reload} className='nameTxt'>
                Kenny Rakentine
            </strong>
        </div>
    )
}

export default Name