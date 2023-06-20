import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    // there is a better way
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    // farklı cihazlarda 'relative' düzen sağlamak için
    maxWidth: "80%",
    width: 300,
  },
});
