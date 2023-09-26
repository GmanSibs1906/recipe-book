import React from 'react'

function RecipieListContainer({title, image, id}) {
  return (
    <div className='recipieListContainer'>
      <img src={image} alt='' />
      <div>
        <h5>{title}</h5>
        <button> View Recipie </button>
      </div>
    </div>
  )
}

export default RecipieListContainer