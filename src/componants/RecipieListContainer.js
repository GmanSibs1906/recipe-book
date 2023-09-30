import React from 'react'
import { Link } from "react-router-dom";

function RecipieListContainer({title, image, id}) {
  return (
    <div className='recipieListContainer'>
      <img src={image} alt='' />
      <div>
        <h5>{title}</h5>
        <Link to="/recipieDetails">
        <button> View Recipie </button>
        </Link>
      </div>
    </div>
  )
}

export default RecipieListContainer