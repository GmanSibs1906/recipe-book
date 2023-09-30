import React from 'react';
import { recipeDataList } from '../data/recipieData';
import RecipieDetailsCard from '../componants/RecipieDetialsCard';

function RecipieDetails({title, image, id, recipe}) {
  return (
    <div className="recipieDetails">
        <div className="recipieList">
        {recipeDataList.map((recepie)=> 
            <RecipieDetailsCard key={recepie.id} id={recepie.id} title={recepie.title} image={recepie.image} recipe={recepie.recipe}/>
        )}
    </div>
    </div>
  )
}

export default RecipieDetails