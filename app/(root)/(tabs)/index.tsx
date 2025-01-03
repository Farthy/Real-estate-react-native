import { Link } from "expo-router";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10 font-rubik">
        Welcome to Restate
      </Text>
    </View>
  );
};

export default index;
