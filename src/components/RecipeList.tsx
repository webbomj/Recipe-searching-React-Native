import { FlatList } from "react-native";
import { useAppSelector } from "../hooks/redux";
import { IRecipe } from "../types/interface";
import Loading from "./Loading";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const { recipes, isLoading } = useAppSelector(
    (state) => state.recipesReducer
  );

  const renderList = (item: any) => {
    // const {} = item;
    return <RecipeItem item={item.item}></RecipeItem>;
  };

  if (isLoading) {
    return <Loading />;
  }

  return <FlatList data={recipes} renderItem={renderList} />;
};

export default RecipeList;
