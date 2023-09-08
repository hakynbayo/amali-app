import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


const GetStarted: React.FC = () => {
  const [pin, setPin] = useState<string>("");

  const handleReset = () => {
    // Add your login logic here, e.g., API calls or authentication checks
    console.log("Pin:", pin);
  };

  return (

    
    <View style={styles.container}>
        <Image 
        style={styles.target}
        source={require("../assets/Target.png")}
        />
        <Image 
        style={styles.image}
        source={require("../assets/Ellipse118.png")}
        />
        <Image 
        style={styles.rings}
        source={require("../assets/Group13.jpg")}
        />
    <View style={styles.inputContainer}>

      <Text style={styles.title}>Save With Friends</Text>
      <Text 
      numberOfLines={2}
      style={styles.subtitle}>
        Feature allows you save with friends effortlessly.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 30,
  },

  target:{
    width:"35%",
    height:"35%",
    resizeMode: "contain",
    position:"absolute",
    right:135,
    top:120,
    zIndex:10,
  },

  image: {
    width:"50%",
    height:"50%",
    resizeMode: "contain",
    marginTop: 10,
  },

  rings:{
    position:"absolute",
    right:0,
    bottom:250,
    zIndex:10,
  },

  inputContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginTop:80,
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    lineHeight: 31.25,
    fontWeight: "700",
    color: "#2E45B8",
    marginBottom:10  },
  subtitle: {
    textAlign: "left",
    fontSize: 20,
    lineHeight: 20.83,
    fontWeight: "400",
    color: "#090E25",
    marginBottom: 30,
    padding: 1,
  },

  button: {
    backgroundColor: "#2E45B8",
    padding:20,
    borderRadius: 5,
    marginBottom: 0,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 19.53,
    textAlign: "center",
  },
});

export default GetStarted;
