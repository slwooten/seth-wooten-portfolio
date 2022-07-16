import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className='card'>
      <div className='left-content'>
        <h1 className='green'>{project.name}</h1>
        <div className='project-img'>
          <p>{project.description}</p>
        </div>
        <div className='project-text'>
          <p><a href={project.liveLink} target='new'>Live Preview &gt;</a></p>
          <p><a href={project.githubLink} target='new'>GitHub Repo &gt;</a></p>
          <h3 className='green'>Technologies Used</h3>
          {project.techs.map(tech => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
      <div className='right-content'>
        <h3 className='green'>My Role</h3>
        <p>{project.roleText}</p>
        <h3 className='green'>Project Difficulties</h3>
        <p>{project.difficulties}</p>
        <h3 className='green'>Solutions</h3>
        <p>{project.solutions}</p>
        <h3 className='green'>Notable Features</h3>
          {project.features.map(feature => (
            <p>{feature}</p>
          ))}
      </div>
    </div>
  )
}

export default ProjectCard;