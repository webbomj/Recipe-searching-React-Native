import { ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
  return <ActivityIndicator style={styles.container} size={36} color={`red`} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
