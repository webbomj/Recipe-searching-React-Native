import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./MainScreen";
import RecipeDetailsScreen from "./RecipeDetailsScreen";
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ title: "Recipes Searching" }}
        />
        <Stack.Screen
          name="SingleRecipe"
          component={RecipeDetailsScreen}
          options={{ title: "Recipe Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
