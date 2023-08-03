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

            const specificRepos = ['Ghost-Hunter-Game', 'Employee-Directory-REACT','Netflix-Functions-Mockup', 'Omdb-Api', 'PerScholas-Responsive-Site', 'PerScholasReactGP']

            const filteredProjects = result.data.filter((project) =>
        specificRepos.includes(project.name)
      )

            filteredProjects.forEach((project) => {
              switch (project.name) {
                case 'Ghost-Hunter-Game':
                  project.image_url = 'https://i.ibb.co/51fx5WP/gh-1.jpg'
                  break
                case 'Employee-Directory-REACT':
                  project.image_url = 'https://i.ibb.co/kmPXqPs/gh2.png'
                  break
                case 'Netflix-Functions-Mockup':
                  project.image_url = 'https://i.ibb.co/SPRCp8R/gh3.png'
                  break
                case 'Omdb-Api':
                    project.image_url = 'https://i.ibb.co/Xz80Kr0/gh4.png'
                  break
                case 'PerScholas-Responsive-Site':
                      project.image_url = 'https://i.ibb.co/qxYC1NM/gh5.png'
                  break
                case 'PerScholasReactGP':
                        project.image_url = 'https://i.ibb.co/hZZY5ky/gh6.png'
                  break
                default:
                  project.image_url = 'https://avatars.githubusercontent.com/u/41464290?v=4'
              }
            })

        // const sixProjects = result.data.slice(0, 6)
        // setProjects(sixProjects)
        setProjects(filteredProjects)
    } catch (error) {
        console.error('Error Fetching Projects:', error)
    }
    }

  return (


    <div>
        <h1>Projects</h1>
        <div className='projects'>
        <div id="carousel">
        {projects.map((project) => (
          <figure><ul key={project.id}>
            <a href={project.html_url}>
             <img className='projectImg' src={project.image_url} alt={project.name} /> 
            </a>
          </ul>
          </figure> 
        ))}
        </div>
        </div>
        
    </div>
  )
}


export default Projects