import React from 'react'
import Pcard from './Pcard'

const Pcards = ({projects}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Pcard key={project.id} {...project} />
      ))}
    </div>
  )
}

export default Pcards