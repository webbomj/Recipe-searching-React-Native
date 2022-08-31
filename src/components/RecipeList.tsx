import { FlatList } from "react-native";
import { useAppSelector } from "../hooks/redux";
import { IRecipe } from "../types/interface";
import Loading from "./Loading";
import RecipeItem from "./RecipeItem";

type renderProps = {
  item: IRecipe;
};

const RecipeList = ({ navigation }: any) => {
  const { recipes, isLoading } = useAppSelector(
    (state) => state.recipesReducer
  );

  const renderList = (item: renderProps) => {
    return <RecipeItem navigation={navigation} item={item.item}></RecipeItem>;
  };

  if (isLoading) {
    return <Loading />;
  }

  return <FlatList data={recipes} renderItem={renderList} />;
};

export default RecipeList;
