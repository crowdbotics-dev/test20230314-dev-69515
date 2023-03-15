import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13
  },
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  text: {
    color: "black",
    fontSize: 20
  },
  boldText: {
    fontSize: 24,
    backgroundColor: "rgba(0,0,0, 0.1)",
    marginTop: 10,
    color: "rgba(0,0,0, 0.6)"
  },
  buttonPressed: {
    backgroundColor: "aquamarine"
  },
  buttonNotPressed: {
    backgroundColor: "blue"
  },
  button: {
    borderRadius: 4,
    padding: 15,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  }
});
export const globalOptions = {
  "name": "test20230314-dev-69515",
  "url": "https://test20230314-dev-69515.botics.co",
  "api": "https://test20230314-dev-69515.botics.co/api/v1"
};
export const modulesOptions = {
  "@modules/app-menu": {
    "title": "App88",
    "copy": "Routes available88",
    "styles": styles
  },
  "@modules/camera": {
    "buttonText": "+ Tak99",
    "styles": styles
  }
};