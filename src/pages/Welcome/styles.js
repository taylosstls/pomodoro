import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FBF2",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  text: {
    fontFamily: "BalooTamma2_400Regular",
    fontSize: 30,
    textAlign: "center",
    color: "#0D0D0D",
    marginTop: 5,
    marginBottom: 75,
  },
  button: {
    backgroundColor: "#731224",
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 90,
    position: "absolute",
    bottom: 25,
    right: 25,
  },
});
