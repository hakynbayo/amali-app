import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  SavingGoals: undefined;
};

type EarnMoneyScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const EarnMoney: React.FC<EarnMoneyScreenProps> = ({ navigation }) => {
  const [pin, setPin] = useState<string>("");

  const handlePress = () => {
    navigation.push('SavingGoals');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.target}
          source={require("../assets/games.png")}
        />
        <Image
          style={styles.elipse}
          source={require("../assets/Ellipse118.png")}
        />
        <Image
          style={styles.targetii}
          source={require("../assets/Group.png")}
        />

        <Image
          style={styles.targetiii}
          source={require("../assets/roundgames.png")}
        />

        <Image
          // style={styles.rings}
          source={require("../assets/Group13.jpg")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>
          Earn Money {"\n"}
          While Saving
        </Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          With Amali you can earn funds by playing {"\n"}
          in-app games daily.
        </Text>

        <TouchableOpacity style={styles.rButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome
            name="angle-double-right"
            style={styles.eye}
            size={23}
            color={"#2E45B8"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor:"#FFFF",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  target: {
    width: "36%",
    height: "45%",
    resizeMode: "contain",
    position: "absolute",
    right: 120,
    top: 100,
    zIndex: 10,
  },
  targetii: {
    width: "12%",
    height: "12%",
    resizeMode: "contain",
    position: "absolute",
    right: 165,
    bottom: 65,
    zIndex: 10,
  },
  targetiii: {
    width: "51%",
    height: "35%",
    resizeMode: "stretch",
    position: "absolute",
    right: 89,
    top: 195,
  },

  elipse: {
    width: "60%",
    height: "40%",
    resizeMode: "contain",
    position: "absolute",
    right: 75,
    top: 175,
  },

  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    lineHeight: 31.25,
    fontWeight: "700",
    color: "#2E45B8",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "left",
    fontSize: 16,
    lineHeight: 20.83,
    fontWeight: "400",
    color: "#090E25",
    marginBottom: 30,
    padding: 1,
  },

  button: {
    backgroundColor: "#2E45B8",
    padding: 20,
    borderRadius: 5,
    marginBottom: 0,
  },

  buttonText: {
    color: "#2E45B8",
    fontSize: 19,
    fontWeight: "500",
    lineHeight: 20.83,
    textAlign: "right",
    marginRight: 20,
  },
  rButton: {
    backgroundColor: "#ffffff",
  },
  eye: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default EarnMoney;
