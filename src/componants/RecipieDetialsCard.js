import React from 'react'

function RecipieDetailsCard({title, image, id, recipe}) {
  return (
    <div className='recipieDetailsCard'>
      <img src={image} alt='' />
      <div>
        <h5>{title}</h5>
        <p>{recipe}</p>
      </div>
    </div>
  )
}

export default RecipieDetailsCard