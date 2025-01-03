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
        WElcome to Restate
      </Text>
      <Link href="/signin"> SignIn</Link>
      <Link href="/explore"> Explore</Link>
      <Link href="/Profile"> Profile</Link>
      <Link href="/properties/1"> Properties</Link>
    </View>
  );
};

export default index;
