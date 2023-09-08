import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SetPin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  const handleLogin = () => {
    // Add your login logic here, e.g., API calls or authentication checks
    console.log("Username:", username);
    console.log("Pin:", pin);
  };

  return (
    <ImageBackground
      source={require("../assets/bgimg.jpg")}
      style={styles.backgroundImage}
    >
      <Text style={styles.title}>Set a new PIN</Text>
      <Text style={styles.subtitle}>
        Choose something thats not common but easy to {"\n"}
        remember
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="PIN"
          onChangeText={setUsername}
        />
        <Feather name="eye" style={styles.eye} size={30} color={"#00000029"} />

        <TextInput
          style={styles.input}
          placeholder="Confirm Pin"
          secureTextEntry
          onChangeText={setPin}
        />
        <Feather name="eye" style={styles.cEye} size={30} color={"#00000029"} />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Change PIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "fit",
    justifyContent: "flex-end",
    marginBottom: 30,
  },

  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 30,
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    lineHeight: 31.25,
    fontWeight: "500",
    color: "#090E25",
    marginBottom: 20,
    padding: 10,
    marginLeft: 30,
  },
  subtitle: {
    textAlign: "left",
    fontSize: 13,
    lineHeight: 18.23,
    fontWeight: "400",
    color: "#090E25",
    marginBottom: 20,
    padding: 10,
    marginLeft: 30,
  },
  lastTitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 70,
    borderColor: "#2E45B8",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  fgtTitle: {
    textAlign: "left",
    fontSize: 18,
    marginBottom: 15,
    color: "#2E45B8",
  },
  button: {
    backgroundColor: "#2E45B8",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  eye: {
    position: "absolute",
    right: 50,
    top: 50,
  },
  cEye: {
    position: "absolute",
    right: 50,
    top: 140,
  },
});

export default SetPin;
