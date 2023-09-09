import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const Login: React.FC = () => {
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
      <TouchableOpacity style={styles.arrow}>
        <AntDesign name="arrowleft" size={20} color={"#011533"} />
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="+234"
          placeholderTextColor="#000"
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="PIN"
          placeholderTextColor="#000"
          secureTextEntry
          keyboardType="numeric"
          onChangeText={setPin}
        />
        <TouchableOpacity style={styles.eye}>
          <Feather name="eye" size={25} color={"#00000029"} />
        </TouchableOpacity>
        <Text style={styles.fgtTitle}>Forgot PIN?</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rButton} onPress={handleLogin}>
          <Text style={styles.lastTitle}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },

  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 50,
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    lineHeight: 31.25,
    fontWeight: "500",
    color: "#090E25",
    padding: 10,
    marginLeft: 30,
  },
  lastTitle: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "400",
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
    fontSize: 16,
  },

  fgtTitle: {
    textAlign: "left",
    fontSize: 15,
    marginBottom: 15,
    color: "#2E45B8",
  },
  button: {
    backgroundColor: "#2E45B8",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  eye: {
    position: "absolute",
    right: 50,
    top: 140,
  },
  rButton: {
    backgroundColor: "#ffffff",
  },
  arrow: {
    position: "absolute",
    left: 30,
    top: 70,
  },
});

export default Login;
