import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { setupStore } from "./src/store/store";
import { Counter } from "./src/components/counter";
const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar></StatusBar>
        <Counter></Counter>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
