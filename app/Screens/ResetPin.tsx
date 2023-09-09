import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign} from "@expo/vector-icons"




const ResetPin: React.FC = () => {
  const [pin, setPin] = useState<string>("");



  

  const handleReset = () => {
    // Add your login logic here, e.g., API calls or authentication checks
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

      <Text style={styles.title}>Reset PIN</Text>
      <Text style={styles.subtitle}>We’ll send a verification code to this Number</Text>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="+234"
            placeholderTextColor="#000"
            secureTextEntry
            keyboardType="numeric"
            onChangeText={setPin}
          />
    
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rButton} onPress={handleReset}>
          <Text style={styles.lastTitle}>Remember password? Login</Text>
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
  subtitle: {
    textAlign: "left",
    fontSize: 13,
    lineHeight:18.23,
    fontWeight: "400",
    color: "#090E25",
    marginBottom: 10,
    padding:10,
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#2E45B8",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  rButton: {
    backgroundColor: "#ffffff",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  arrow: {
    position: "absolute",
    left: 30,
    top: 70,
  },
});

export default ResetPin;
