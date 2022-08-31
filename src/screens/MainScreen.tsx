import { useEffect } from "react";
import RecipeList from "../components/RecipeList";
import { useAppDispatch } from "../hooks/redux";
import { fetchRecipes } from "../reducers/ActionCreators";

const MainScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return <RecipeList navigation={navigation}></RecipeList>;
};

export default MainScreen;
