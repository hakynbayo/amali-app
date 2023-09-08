import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {Feather} from "@expo/vector-icons"



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
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="+234"
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="pin"
            secureTextEntry
            onChangeText={setPin}
          /> 
          <Feather name="eye" style={styles.eye} size={30} color={"#00000029"}/>

          <Text style={styles.fgtTitle}>Forgot PIN?</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.lastTitle}>Don’t have an account? Sign Up</Text>
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
    lineHeight:31.25,
    fontWeight: "500",
    color: "#090E25",
    marginBottom: 20,
    padding:10,
    marginLeft: 30,
  },
  lastTitle: {
    textAlign: "center",
    fontSize: 13,
    fontWeight:"400",
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
});

export default Login;
