import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { ISavedRecipe, IFullRecipe } from "./types";
import SavedRecipes from "./components/SavedRecipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const [status, setStatus] = useState(false)
  const [savedRecipes, setSavedRecipes] = useState<ISavedRecipe[]>([
    {recipeId : "", label: "", image: "", source: "", shareAs: "", ingredientLines: [] },
  ]);

  const [fullRecipe, setFullRecipe] = useState<IFullRecipe[]>([
    {recipeId : "", label: "", image: "", source: "", shareAs: "", ingredientLines: [] , dietLabels: [], healthLabels: [], calories: 0, totalWeight: 0, totalTime: 0, cuisineType: [], dishType: [], digest: []},
  ]);

  const getRecipes = async () => {
    try {
      if (query.length != 0) {
        const response = await axios.get(
          `http://localhost:5000/api/recipes/${query}`
        );
        console.log(response.data);
        setRecipes(response.data);
      }
    } catch (error) {
      console.log("this is your error", error);
      setRecipes([]);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

    
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          search,
          setSearch,
          query,
          setQuery,
          recipes,
          savedRecipes,
          setSavedRecipes,
          showSavedRecipes,
          setShowSavedRecipes,
          status,
          setStatus,
          fullRecipe,
          setFullRecipe,
        }}
      >
        <Search />
        <SavedRecipes />
        <RecipeContainer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
