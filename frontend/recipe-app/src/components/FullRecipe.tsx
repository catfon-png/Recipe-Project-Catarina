import React from 'react'
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IRecipeClass, IFullRecipe } from "../types";


type recipeProps = {
    recipe: IRecipeClass;
  };

export const FullRecipe = (props: recipeProps) => {
  const { label, image, source, shareAs, ingredientLines } = props.recipe;

  const { fullRecipe, setFullRecipe } = useContext(AppContext);

  return (
    <div className='full-recipe'>
        <h1>Title</h1>
        <h2>Sub-Heading</h2>
        <p></p>
    </div>
  )
}
