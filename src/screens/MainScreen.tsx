import { useEffect } from "react";
import RecipeList from "../components/RecipeList";
import { useAppDispatch } from "../hooks/redux";
import { fetchRecipes } from "../reducers/ActionCreators";

const MainScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return <RecipeList></RecipeList>;
};

export default MainScreen;
