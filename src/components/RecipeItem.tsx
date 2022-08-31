import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useAppDispatch } from "../hooks/redux";
import { IRecipe } from "../types/interface";
import { recipesSlice } from "../reducers/userSlice";

const RecipeItem = ({
  item,
  navigation,
}: {
  item: IRecipe;
  navigation: any;
}) => {
  const { recipe } = item;

  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(recipesSlice.actions.setSingleRecipe(recipe));
        navigation.navigate("SingleRecipe");
      }}
    >
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <Image
            source={{
              uri: recipe.images.THUMBNAIL.url,
              width: recipe.images.THUMBNAIL.width,
              height: recipe.images.THUMBNAIL.height,
            }}
            borderRadius={10}
          />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.header}>
            {recipe.label.length > 20
              ? `${recipe.label.slice(0, 20)}...`
              : recipe.label}
          </Text>
          <Text>Calories: {recipe.calories.toFixed()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  leftBlock: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  rightBlock: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RecipeItem;
