import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



type RootStackParamList = {
    Login: undefined;
  };
  
  type GetStartedScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
  };

const GetStarted: React.FC<GetStartedScreenProps> = ({navigation}) => {
  const [pin, setPin] = useState<string>("");

  const handlePress = () => {
    navigation.push('Login');
  };

  return (

    
    <View style={styles.container}>
      <View style={styles.imageContainer} >

        <Image 
        style={styles.target}
        source={require("../assets/Target.png")}
        />
        <Image 
        style={styles.elipse}
        source={require("../assets/Ellipse118.png")}
        />

        <Image 
        style={styles.targetiii}
        source={require("../assets/Rectangle77.png")}
        />

      <Image 
        style={styles.targetii}
        source={require("../assets/Group3.png")}
        />

        <Image 
        // style={styles.rings}
        source={require("../assets/Group13.jpg")}
        />
      </View>
    <View style={styles.inputContainer}>

      <Text style={styles.title}>Save With Friends</Text>
      <Text 
      numberOfLines={2}
      style={styles.subtitle}>
        Feature allows you save with friends {"\n"}effortlessly.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
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
    alignItems:"flex-end",
    backgroundColor:"#FFFF",
  },
  imageContainer:{
    flex: 1,
    justifyContent:"flex-end",
    alignContent:"center",
  },
  target:{
    width:"36%",
    height:"45%",
    resizeMode: "contain",
    position:"absolute",
    right:120,
    top:100,
    zIndex:10,
  },
  targetii:{
    width: "12%",
    height: "12%",
    resizeMode: "contain",
    position: "absolute",
    right: 165,
    bottom: 75,
  },
  targetiii:{
    width:"35%",
    height:"35%",
    resizeMode: "contain",
    position:"absolute",
    right:123,
    top:275,
  },



  elipse: {
    width:"60%",
    height:"40%",
    resizeMode: "contain",
    position:"absolute",
    right:75,
    top:150,
  },

  inputContainer: {
    width:"100%",
    backgroundColor: "#fff",
    paddingBottom: 40,
    paddingHorizontal:20,
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    lineHeight: 31.25,
    fontWeight: "700",
    color: "#2E45B8",
    marginBottom:10  
  },
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
