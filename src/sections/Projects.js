import React from 'react'
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: 'Pixel Mixup',
    img: 'https://via.placeholder.com/200',
    liveLink: 'google.com',
    githubLink: 'google.com',
    techs: [
      'MongoDB, Mongoose ODM',
      'Express.js',
      'React.js',
      'Node.js',
      'Apollo Server',
      'GraphQL',
      'HTML/CSS/JavaScript',
      'JWT(Authentication',
    ],
    roleText: 'While working on Pixel Mixup, I was predominantly responsible for backend functionality while assisting in CSS styling and any troubleshooting associated with it.',
    difficulties: 'The overall interactive nature of the canvas/grid used in Pixel Mixup would probably be what I considered the biggest challenge. Ensuring that the canvas worked properly on the client side, while also effectively storing and retrieving the needed data for each canvas challenged my abilities in working with a MERN stack application.',
    solutions: 'Providing each user, canvas, and colored tile placed within a canvas with a unique ID allowed us to store and retrieve the data in a way that could be replicated throughout the application.',
    features: [
      'Login/SignUp',
      'Ability for each user to create their own canvas',
      'Ability for users to view other canvases',
      'Option to delete canvas'
    ]
  },
  {
    name: 'Live Weather Dashboard',
    img: 'https://via.placeholder.com/200',
    liveLink: 'google.com',
    githubLink: 'google.com',
    techs: [
      'Third-Party APIs',
      'HTML',
      'Local Storage',
      'CSS',
      'JavaScript'
    ],
    roleText: 'Developing the app from start to finish.',
    difficulties: 'Consistently saving data to local storage and retrieving it correctly.',
    solutions: 'Successful implementation of local storage.',
    features: [
      'Searchbar',
      'History'
    ]
  },
  {
    name: 'Work Day Scheduler',
    img: 'https://via.placeholder.com/200',
    liveLink: 'google.com',
    githubLink: 'google.com',
    techs: [
      'Moment.js',
      'jQuery',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    roleText: 'Developing the app from start to finish.',
    difficulties: 'Consistently saving data to local storage and retrieving it correctly.',
    solutions: 'Successful implementation of local storage.',
    features: [
      'Local Storage',
      'History'
    ]
  }
];

const Projects = () => {
  return (
    <div className='projects-section'>
      <div className='projects-header'>
        <h1 id='Projects'>Projects</h1>
      </div>
      <div className='project-cards-container'>
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;