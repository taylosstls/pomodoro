import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBF2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  yogaImage: {
    width: 160,
    height: 160,
    marginBottom: 24,
  },
  title: {
    fontFamily: "BalooTamma2_700Bold",
    color: "#731224",
    fontSize: 30,
  },
  text: {
    fontFamily: "BalooTamma2_400Regular",
    fontSize: 22,
    textAlign: "center",
    color: '#0D0D0D',
  },
  button: {
    position: "absolute",
    backgroundColor: "#731224",
    bottom: 25,
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 50,
  },
});
