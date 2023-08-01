import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        getProjects()
    }, [])

    const getProjects = async ()=>{
        try{
            const result = await axios.get('https://api.github.com/users/Kenneth-Rakentine/repos')
        

        const sixProjects = result.data.slice(0, 10)
        setProjects(sixProjects)
    } catch (error) {
        console.error('Error Fetching Projects:', error);
    };
    }

  return (


    <div>
        <h1>Projects</h1>
        <ul className='projects'>
        {projects.map((project) => (
          <ul key={project.id}>
            <a href={project.html_url}>{project.name}</a>
          </ul>
        ))}
        </ul>
        
    </div>
  )
}


export default Projects