import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { IRecipe } from "../types/interface";

const RecipeItem = ({ item }: { item: IRecipe }) => {
  const { recipe } = item;

  return (
    <TouchableOpacity>
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
            {recipe?.label.length > 20
              ? `${recipe?.label.slice(0, 20)}...`
              : recipe?.label}
          </Text>
          <Text>{recipe.calories}</Text>
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
