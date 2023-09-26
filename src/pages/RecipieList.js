import React from 'react';
import RecipieListContainer from '../componants/RecipieListContainer';
import { recipeDataList } from '../data/recipieData';

function RecipieList() {
  return (
    <div className="recipieList">
        {recipeDataList.map((recepie)=> 
            <RecipieListContainer key={recepie.id} id={recepie.id} title={recepie.title} image={recepie.image}/>
        )}
    </div>
  )
}

export default RecipieList