import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#F9FBF2",
  },
  title: {
    fontFamily: "BalooTamma2_700Bold",
    fontSize: 30,
    color: "#731224",
    marginBottom: 70,
  },
  progressContainer: {
    marginBottom: 25,
  },
  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  timerSettingsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  timerSettingsOption: {
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontFamily: "BalooTamma2_400Regular",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    color: "#0D0D0D",
  },
  timeEllapsed: {
    fontFamily: "BalooTamma2_400Regular",
    fontSize: 70,
    color: "#0D0D0D",
  },
  timeUnity: {
    fontFamily: "BalooTamma2_400Regular",
    fontSize: 15,
    color: "#0D0D0D",
  },
});
