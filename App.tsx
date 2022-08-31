import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { setupStore } from "./src/store/store";
import { Navigation } from "./src/screens/Navigation";
const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
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
