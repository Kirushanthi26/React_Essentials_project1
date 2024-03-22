import React from 'react'

const CoreConcept = ({title, image, description}) => {
  return (
    <li>
      <img src={image} alt={image}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept
