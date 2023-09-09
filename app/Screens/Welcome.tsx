import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
      <Image style={styles.amali} source={require("../assets/Group19.jpg")} />
      {/* <Text style={styles.logoText}>AMALI</Text> */}


      <View style={styles.inputContainer}>
        <Text style={styles.title}>Welcome Back {"\n"} Taiwo</Text>
        <Text style={styles.subtitle}>Kindly enter your 6-digit PIN</Text>

        <View style={styles.pinContainer}>
        {Array.from({ length: 6 }, (_, index) => (
          <View key={index} style={styles.pinDigit}>
            <Text style={styles.pinDigitText}>
              {pin[index] ? "*" : ""}
            </Text>
          </View>
        ))}
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={(text) => setPin(text)}
        value={pin}
      />

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rButton} onPress={handleReset}>
          <Text style={styles.lastTitle}>Forgot PIN?</Text>
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
    backgroundColor: "#FFFF",
    padding: 30,
    borderRadius: 50,
  },
  amali:{
   position:"relative",
   bottom:95,
   left:120,
  },
  logoText:{
    fontSize:30,
    fontWeight:"700",
    lineHeight:30,
    color:"#2E45B8",
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    lineHeight: 31.25,
    fontWeight: "700",
    color: "#2E45B8",
  },
  lastTitle: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 10,
  },
  input: {
    borderColor: "#FFFF",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 20,
    width: 0, 
    height: 0, 
  },

  pinContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pinDigit: {
    width: 45,
    height: 40,
    borderBottomWidth: 2, 
    borderColor: "#2E45B8", 
    marginHorizontal: 5, 
    justifyContent: "center",
    alignItems: "center",
  },
  pinDigitText: {
    fontSize: 20,
  },
  subtitle: {
    textAlign: "left",
    fontSize: 13,
    lineHeight: 18.23,
    fontWeight: "400",
    color: "#011533",
    marginBottom: 10,
    padding: 10,
    // marginLeft: 30,
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
 
});

export default ResetPin;
