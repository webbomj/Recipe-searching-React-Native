import {
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import { useAppSelector } from "../hooks/redux";

const RecipeDetailsScreen = () => {
  const { singleRecipe } = useAppSelector((state) => state.recipesReducer);

  if (singleRecipe) {
    return (
      <ScrollView>
        <Image
          style={styles.imageWrapper}
          source={{
            uri: singleRecipe.images.SMALL.url,
            height: singleRecipe.images.SMALL.height,
            width: singleRecipe.images.SMALL.width,
          }}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.header}>{singleRecipe.label}</Text>
          <Text style={styles.calories}>
            Calories: {singleRecipe.calories.toFixed()}
          </Text>
          <FlatList
            style={styles.ingredients}
            data={singleRecipe.ingredientLines}
            renderItem={(item) => <Text>{item.item}</Text>}
          />
        </View>
      </ScrollView>
    );
  }

  return <Text>Not Found</Text>;
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignSelf: "center",
    borderRadius: 180,
    marginTop: 10,
  },
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
  calories: {
    fontSize: 16,
    alignSelf: "flex-end",
  },
  ingredients: {
    marginTop: 20,
  },
});

export default RecipeDetailsScreen;
