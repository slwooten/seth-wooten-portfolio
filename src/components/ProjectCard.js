import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className='card'>
      <div className='left-content'>
        <h1>{project.name}</h1>
        <div className='project-img'>
          <img src={project.img} alt='project' />
        </div>
        <div className='project-text'>
          <p><a href={project.liveLink} target='new'>Live Preview &gt;</a></p>
          <p><a href={project.githubLink} target='new'>GitHub Repo &gt;</a></p>
          <h3>Technologies Used</h3>
          {project.techs.map(tech => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
      <div className='right-content'>
        <h3>My Role</h3>
        <p>{project.roleText}</p>
        <h3>Project Difficulties</h3>
        <p>{project.difficulties}</p>
        <h3>Solutions</h3>
        <p>{project.solutions}</p>
        <h3>Notable Features</h3>
        <ul>
          {project.features.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard;