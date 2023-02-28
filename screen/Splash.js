import { View, Text, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const time = setInterval(() => {
      navigation.navigate("Home");
    }, 2800);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03a679",
      }}
    >
      <Image
        style={{ height: "65%", width: "60%", resizeMode: "contain" }}
        source={require("../images/resume.gif")}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: -90,
          color: "#f4b63e",
        }}
      >
        Build Your Resume
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#f4b63e",
        }}
      >
        Get Your Dream Job
      </Text>
    </View>
  );
};

export default Splash;
