import React from 'react'
import { saveAs } from 'file-saver';


function Resume() {

    const resumeHtmlUrl = `${process.env.PUBLIC_URL}/files/Kenneth Rakentine Resume [Per Scholas].htm`;

    const download = () => {
        const fileUrl = `${process.env.PUBLIC_URL}/files/Kenneth Rakentine Resume [Per Scholas].docx`
        const fileName = 'Kenneth_Rakentine_Resume.docx'
            saveAs(fileUrl, fileName)
      }

  return (
    <div className='resumeSection'>
      <h1 className='resumeHeadTxt'>Resume</h1>
      <div>
      <a className='hyperlinkResume' href={resumeHtmlUrl} target="_blank" rel="noopener noreferrer">
        Open Resume in New Tab
      </a>
      </div>
      <button className='resumeBtn' onClick={download}>Download Resume</button>
    </div>
  )
}

export default Resume