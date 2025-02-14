import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  results: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  resultItem: {
    marginBottom: 15,
  },
  resultTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  resultLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
