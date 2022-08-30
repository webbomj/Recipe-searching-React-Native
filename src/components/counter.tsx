import { Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export const Counter = () => {
  const { recipes, error, isLoading } = useAppSelector(
    (state) => state.recipesReducer
  );

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchRecipes());
  // }, []);

  return (
    <>
      <Text>{error}</Text>
      <Text>{recipes[0]?.recipe?.label}</Text>
      <Text>{isLoading.toString()}</Text>
    </>
  );
};
