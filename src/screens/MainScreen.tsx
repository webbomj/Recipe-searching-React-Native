import { useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RecipeList from "../components/RecipeList";
import SearchInput from "../components/SearchInput";
import { useAppDispatch } from "../hooks/redux";
import { fetchRecipes } from "../reducers/ActionCreators";

const MainScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <View>
      <SearchInput></SearchInput>
      <RecipeList navigation={navigation}></RecipeList>
    </View>
  );
};

export default MainScreen;
