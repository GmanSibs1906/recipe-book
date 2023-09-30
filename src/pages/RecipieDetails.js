import React from 'react';
import { recipeDataList } from '../data/recipieData';
import RecipieDetailsCard from '../componants/RecipieDetialsCard';
import { useParams } from 'react-router-dom';

function RecipieDetails() {
    const params = useParams();
    return (
        <div className="recipieDetails">
            <p>This is the id : {params.id}</p>
            <div className="recipieList">
                {recipeDataList.map((recepie) =>
                    <RecipieDetailsCard key={recepie.id} id={recepie.id} title={recepie.title} image={recepie.image} recipe={recepie.recipe} />
                )}
            </div>
        </div>
    )
}

export default RecipieDetails