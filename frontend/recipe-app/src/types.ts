export interface IRecipeClass {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: any[];
  healthLabels: any[];
  cautions: any[];
  ingredientLines: string[];
  ingredients: any[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: any[];
  mealType: any[];
  dishType: any[];
  totalNutrients: Total;
  totalDaily: Total;
  digest: any[];
}
export interface IRecipe {
  recipes: IRecipeClass;
}
// would also be cool to add diet labels to recipe
export interface ISavedRecipe {
  recipeId : string,
  label: string;
  image: string;
  source: string;
  shareAs: string;
  ingredientLines: string[];
  status? : boolean;
}

export interface IFullRecipe {
  recipeId : string,
  label: string;
  image: string;
  source: string;
  shareAs: string;
  ingredientLines: string[];
  dietLabels: any[];
  healthLabels: any[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: any[];
  dishType: any[];
  // totalNutrients: Total;
  // totalDaily: Total;
  digest: any[];
}



export interface IRecipes {
  recipes: IRecipeClass[];
}

export interface Total {}
