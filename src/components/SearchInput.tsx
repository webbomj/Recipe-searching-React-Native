import { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { useAppDispatch } from "../hooks/redux";
import { fetchRecipes } from "../reducers/ActionCreators";
import { recipesSlice } from "../reducers/userSlice";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatch();

  const handleTextInputChange = (e: string) => {
    setInputValue(e);
  };

  const handleButtonPress = () => {
    dispatch(fetchRecipes(inputValue));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder={"search"}
        onChangeText={(e) => handleTextInputChange(e)}
      />
      <Pressable style={styles.button} onPress={() => handleButtonPress()}>
        <Text style={styles.buttonText}>OK</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  input: {
    flex: 5,
    height: 60,
    borderColor: "#000",
    borderWidth: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 8,
    fontSize: 20,
  },
  button: {
    flex: 1,
    height: 60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchInput;
